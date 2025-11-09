/**
 * STATUS-SCRIPT.JS
 * -----------------------------------------------------------------------
 * Primarily used for the functionality of status.html and index.html.
*/

/**
 * i fucking hated working on this...
 */

import '/src/js/components/base.js';

const DEFAULT_STATUS_TIMEZONE = "Europe/Bucharest"; // You can leave this as is, it shows the right time everywhere; change it if you prefer your own timezone
const TIME_ZONE_FORMATTER_CACHE = new Map();

function formatDatetime(dateTimeString) {
    if (!dateTimeString) {
        return "Unknown date";
    }

    const postDate = new Date(dateTimeString);

    if (Number.isNaN(postDate.getTime())) {
        return dateTimeString;
    }

    return postDate.toLocaleString('en-US', {
        weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit',
        hour12: true,
    });
}

function getTimeZoneFormatter(timeZone) {
    if (!TIME_ZONE_FORMATTER_CACHE.has(timeZone)) {
        TIME_ZONE_FORMATTER_CACHE.set(timeZone, new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }));
    }

    return TIME_ZONE_FORMATTER_CACHE.get(timeZone);
}

function getTimeZoneOffsetMs(date, timeZone) {
    const formatter = getTimeZoneFormatter(timeZone);
    const parts = formatter.formatToParts(date);
    const filled = {};

    parts.forEach(({ type, value }) => {
        if (type !== "literal") {
            filled[type] = value;
        }
    });

    const asUTC = Date.UTC(
        Number(filled.year),
        Number(filled.month) - 1,
        Number(filled.day),
        Number(filled.hour),
        Number(filled.minute),
        Number(filled.second),
    );

    return asUTC - date.getTime();
}

function isIsoWithOffset(value) {
    return typeof value === "string" && /([+-]\d{2}:\d{2}|Z)$/i.test(value);
}

function zonedTimeToUtc(dateTimeString, timeZone) {
    const [datePart, timePart = "00:00:00"] = dateTimeString.split("T");

    if (!datePart) {
        return null;
    }

    const [yearStr, monthStr, dayStr] = datePart.split("-");
    const [hourStr = "00", minuteStr = "00", secondStr = "00"] = timePart.split(":");

    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    const hour = Number(hourStr);
    const minute = Number(minuteStr);
    const second = Number(secondStr);

    if ([year, month, day, hour, minute, second].some((value) => Number.isNaN(value))) {
        return null;
    }

    const createUtcDate = () => new Date(Date.UTC(year, month - 1, day, hour, minute, second));

    let utcDate = createUtcDate();
    let offset = getTimeZoneOffsetMs(utcDate, timeZone);
    utcDate = new Date(utcDate.getTime() - offset);

    // Handle DST transitions by checking offset again.
    const updatedOffset = getTimeZoneOffsetMs(utcDate, timeZone);
    if (offset !== updatedOffset) {
        utcDate = new Date(createUtcDate().getTime() - updatedOffset);
    }

    return utcDate;
}

function normalizeStatusDatetime(dateTimeString, timeZone = DEFAULT_STATUS_TIMEZONE) {
    if (!dateTimeString) {
        return null;
    }

    if (isIsoWithOffset(dateTimeString)) {
        return dateTimeString;
    }

    const utcDate = zonedTimeToUtc(dateTimeString, timeZone);
    return utcDate ? utcDate.toISOString() : dateTimeString;
}

function normalizeStatuses(statuses) {
    return statuses.map((status) => {
        const timezone = status.timezone || DEFAULT_STATUS_TIMEZONE;
        return {
            ...status,
            datetime: normalizeStatusDatetime(status.datetime, timezone),
        };
    });
}

function setVideoVolume(root = document) {
    const videos = root.querySelectorAll("video.status-video");
    videos.forEach((video) => {
        video.volume = 0.3; // volume for videos (nearly went deaf if i wasn't adding this)
    });
}

async function loadStatuses() {
    try {
        const response = await fetch("/status/statuses.json", { cache: "no-cache" });

        if (!response.ok) {
            throw new Error(`Failed to fetch statuses: ${response.status}`);
        }

        const data = await response.json();
        const rawStatuses = Array.isArray(data) ? data : data?.statuses;

        if (!Array.isArray(rawStatuses)) {
            throw new Error("Statuses JSON is not an array.");
        }

        return normalizeStatuses(rawStatuses);
    } catch (error) {
        console.error("Error loading statuses:", error);
        return [];
    }
}

function renderStatuses(statuses) {
    const container = document.getElementById("status_container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (statuses.length === 0) {
        container.innerHTML = "<p>No status updates yet.</p>";
        document.title = "fr0st";
        return;
    }

    statuses.forEach((status, index) => {
        const localDatetime = status.datetime;

        const statusDiv = document.createElement("div");
        statusDiv.className = "status";
        statusDiv.dataset.index = index;

        const content = `
            ${status.message ? `<p>${status.message}</p>` : ""}
            ${status.image ? `<img class="status-image" src="${status.image}" alt="Image Failed To Load">` : ""}
            ${status.video ? `<video class="status-video" src="${status.video}" alt="Video Failed To Load" controls preload="metadata" playsinline></video>` : ""}
        `;

        statusDiv.innerHTML = `
            <img class="pfp" src="/src/media/PFPs/pfp-2.png" alt="Profile Picture">
            <div class="content">
                <h3>${status.title}<span class="emoji-container">${status.emoji}</span></h3>
                ${content}
                <small class="time-ago">Posted on: ${formatDatetime(localDatetime)}</small>
            </div>
        `;

        container.appendChild(statusDiv);
    });

    document.title = `${statuses[0].title}${statuses[0].emoji}`;
    setVideoVolume(container);
}

function renderLatestStatus(status) {
    const statusBox = document.querySelector(".grid_row_box_dotted_status");

    if (!statusBox) {
        return;
    }

    if (!status) {
        statusBox.innerHTML = "<p>No status available.</p>";
        return;
    }

    const content = `
        ${status.message ? `<p>${status.message}</p>` : ""}
        ${status.image ? `<img class="status-image" src="${status.image}" alt="Status Image">` : ""}
        ${status.video ? `<video class="status-video" src="${status.video}" controls preload="metadata" playsinline></video>` : ""}
    `;

    statusBox.innerHTML = `
        <div class="latest-status">
            <a class="current-status" href="status.html"><h3>Current Status:</h3></a>
            <h3>${status.title}<span class="emoji-container">${status.emoji}</span></h3>
            ${content}
            <small class="time-ago">Posted on: ${formatDatetime(status.datetime)}</small>
        </div>
    `;

    setVideoVolume(statusBox);
}

function persistLatestStatus(statuses) {
    if (statuses.length === 0) {
        localStorage.removeItem("latestStatus");
        return;
    }

    localStorage.setItem("latestStatus", JSON.stringify(statuses[0]));
}

document.addEventListener("DOMContentLoaded", async () => {
    const statuses = await loadStatuses();

    if (statuses.length === 0) {
        renderStatuses([]);
        renderLatestStatus(null);
        return;
    }

    persistLatestStatus(statuses);
    renderStatuses(statuses);
    renderLatestStatus(statuses[0]);
});
