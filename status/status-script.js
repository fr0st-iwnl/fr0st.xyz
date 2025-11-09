/**
 * STATUS-SCRIPT.JS
 * -----------------------------------------------------------------------
 * Primarily used for the functionality of status.html and index.html.
*/

/**
 * i fucking hated working on this...
 */

import '/src/js/components/base.js';

// Function to format the datetime
function formatDatetime(dateTimeString) {
    if (!dateTimeString) {
        return "";
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
        const statuses = Array.isArray(data) ? data : data?.statuses;

        if (!Array.isArray(statuses)) {
            throw new Error("Statuses JSON is not an array.");
        }

        return statuses;
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
