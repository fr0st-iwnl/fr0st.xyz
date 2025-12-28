#!/usr/bin/env node

/**
 * update-last-updated.js // (fr0st.xyz)
 * [RUN THE SCRIPT WITH : node scripts/update-last-updated.js]
 * ------------------------------------------------------------------------------------------------------
 * Updates "Last updated on" dates in article HTML files using git history
 * 
 * Example of how to use this :
 * git add . (or whatever u want)
 * git commit -m "commit message"
 * RUN THE SCRIPT -> node scripts/update-last-updated.js
 * it fills the dates from the commit
 * git push -u origin master/main ur branch whatever
 * 
 * NOTE:
 * This script must be run manually or as part of your build step.
 * It does not run automatically in production.
 * 
*/

"use strict";

// -------------------------------------------------------
// turn this off if you do not want to use git dates
// set to false and update dates manually from HTML

const LAST_UPDATED_ENABLED = true; // ON/OFF

// -------------------------------------------------------

const { execSync } = require("child_process");
const { readdirSync, readFileSync, statSync, writeFileSync } = require("fs");
const { join, relative } = require("path");

/**
 * COLORS :)
 */
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    dim: "\x1b[2m",
};

const logInfo = (msg) => console.log(`${colors.green}${msg}${colors.reset}`);
const logWarn = (msg) => console.log(`${colors.yellow}${msg}${colors.reset}`);
const logMuted = (msg) => console.log(`${colors.dim}${msg}${colors.reset}`);

const repoRoot = join(__dirname, "..");
const articlesDir = join(repoRoot, "articles");

const walkHtmlFiles = (dir) => {
    const entries = readdirSync(dir, { withFileTypes: true });
    const files = [];

    entries.forEach((entry) => {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...walkHtmlFiles(fullPath));
            return;
        }
        if (entry.isFile() && entry.name.endsWith(".html")) {
            files.push(fullPath);
        }
    });

    return files;
};

const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-").map(Number);
    if (!year || !month || !day) return null;
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
};

const getGitDate = (filePath) => {
    try {
        const result = execSync(`git log -1 --format=%cs -- "${filePath}"`, {
            cwd: repoRoot,
            stdio: ["ignore", "pipe", "ignore"],
        })
            .toString()
            .trim();
        return result || null;
    } catch (error) {
        return null;
    }
};

const getChangedFilesInHead = () => {
    try {
        const result = execSync("git diff-tree --no-commit-id --name-only -r HEAD -- articles", {
            cwd: repoRoot,
            stdio: ["ignore", "pipe", "ignore"],
        })
            .toString()
            .split(/\r?\n/)
            .map((entry) => entry.trim())
            .filter(Boolean);
        return new Set(result);
    } catch (error) {
        return new Set();
    }
};

const updateFile = (filePath) => {
    const raw = readFileSync(filePath, "utf8");
    const relativePath = relative(repoRoot, filePath);
    const gitDate = getGitDate(relativePath);
    const formatted = gitDate ? formatDate(gitDate) : null;

    if (!formatted) {
        return false;
    }

    const pattern = /(Last updated on:\s*<b>)(.*?)(<\/b>)/i;
    if (!pattern.test(raw)) {
        return false;
    }

    const updated = raw.replace(pattern, `$1${formatted}$3`);
    if (updated === raw) {
        return false;
    }

    writeFileSync(filePath, updated, "utf8");
    return true;
};

const files = walkHtmlFiles(articlesDir);
let updatedCount = 0;
const updatedFiles = [];
const skippedFiles = [];
const changedFiles = getChangedFilesInHead();

if (!LAST_UPDATED_ENABLED) {
    logWarn("update-last-updated.js is OFF.");
    process.exit(0);
}


files.forEach((file) => {
    const stats = statSync(file);
    if (!stats.isFile()) return;
    if (updateFile(file)) {
        updatedCount += 1;
        updatedFiles.push(relative(repoRoot, file));
    } else if (!getGitDate(relative(repoRoot, file))) {
        skippedFiles.push(relative(repoRoot, file));
    }
});

if (updatedCount > 0) {
    logInfo(`Updated last updated dates in ${updatedCount} article(s).`);
    if (changedFiles.size > 0) {
        const touched = updatedFiles.filter((file) => changedFiles.has(file));
        if (touched.length > 0) {
            logMuted("Updated in latest commit:");
            touched.forEach((file) => {
                logMuted(`- ${file}`);
            });
        }
    }
}

if (skippedFiles.length > 0) {
    logWarn("Skipped (no git history found).");
}
