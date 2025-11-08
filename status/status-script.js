/**
 * STATUS-SCRIPT.JS
 * -----------------------------------------------------------------------
 * Primarily used for the functionality of status.html and index.html.
*/

/**
 * i fucking hated working on this...
 */

import '/src/js/components/base.js';

// Function to fix timezone offset issue when creating dates
// DO NOT MODIFY THE formatDatetime FUNCTION
function fixedDatetime(year, month, day, hour, minute) {
    // Convert month to number for easier comparison
    const monthNum = parseInt(month);
    
    // Adjust for DST (Daylight Saving Time)
    // In Europe, DST typically starts in March (month 3) and ends in October (month 10)
    let adjustedHour = hour;
    
    // During DST months (April to October), subtract 1 hour
    if (monthNum >= 4 && monthNum <= 10) {
        adjustedHour = String(parseInt(hour) - 1).padStart(2, '0');
    }
    
    // Create ISO string with fixed +02:00 timezone
    return `${year}-${month}-${day}T${adjustedHour}:${minute}:00+02:00`;
}

// Function to format the datetime
function formatDatetime(dateTimeString) {
    const postDate = new Date(dateTimeString);
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

document.addEventListener("DOMContentLoaded", () => {
    // need to make a json file for these (soon) man ts shi tiring
    const statuses = [
        {
            title: "fr0st - ",
            emoji: "😭",
            message: "I DO WAT I WANT WHATEVA",
            video: "https://files.fr0st.xyz/uploads/status/3jobom.mp4",
            datetime: fixedDatetime("2025", "11", "05", "11", "14"),
        },
        {
            title: "fr0st - ",
            emoji: "✌️",
            message: "Hola, amigos! Peace, okay?",
            image: "https://i.postimg.cc/nVQD3S0K/957e0b83c451219038d9698c3f568218.jpg",
            datetime: fixedDatetime("2025", "06", "27", "1", "04"),
        },
        {
            title: "fr0st - ",
            emoji: "🎶",
            message: "finally revamped the music page",
            datetime: fixedDatetime("2025", "06", "05", "2", "13"),
        },
        {
            title: "fr0st - ",
            emoji: "😑",
            message: "hate being lazy when i wanna build things :/",
            datetime: fixedDatetime("2025", "05", "26", "10", "20"),
        },
        {
            title: "fr0st - ",
            emoji: "✨",
            message: "hope yall like the new design :P",
            datetime: fixedDatetime("2025", "04", "25", "21", "22"),
        },
        {
            title: "fr0st - ",
            emoji: "😔",
            message: "tired and sad",
            datetime: fixedDatetime("2025", "03", "25", "06", "34"),
        },
        {
            title: "fr0st - ",
            emoji: "😭",
            message: "man i just love my life.",
            image: "https://i.postimg.cc/wMnzvKPD/Untitled.png",
            datetime: fixedDatetime("2025", "02", "18", "20", "15"),
        },
        {
            title: "fr0st - ",
            emoji: "😿",
            message: "man i hate js :(",
            datetime: fixedDatetime("2025", "02", "05", "00", "16"),
        },
        {
            title: "fr0st - ",
            emoji: "😼",
            message: "yes.",
            image: "https://i.kym-cdn.com/photos/images/newsfeed/002/336/299/918.jpg",
            datetime: fixedDatetime("2025", "02", "04", "15", "45"),
        },
    ];

    // Save the latest status to localStorage (assuming the first item is the latest)
    localStorage.setItem("latestStatus", JSON.stringify(statuses[0]));

    // Function to render statuses
    function renderStatuses(statuses) {
        const container = document.getElementById("status_container");

        if (!container) {
            console.warn("Warning: #status_container not found. Skipping rendering.");
            return;
        }

        container.innerHTML = ""; // Clear existing content

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

        if (statuses.length > 0) {
            document.title = `${statuses[0].title}${statuses[0].emoji}`;
        }
    }

    // Only render statuses if the container exists
    if (document.getElementById("status_container")) {
        renderStatuses(statuses);
        setVideoVolume();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const statusBox = document.querySelector(".grid_row_box_dotted_status");

    if (!statusBox) {
        return;
    }

    const latestStatus = localStorage.getItem("latestStatus");

    if (latestStatus) {
        const status = JSON.parse(latestStatus);

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
    } else {
        statusBox.innerHTML = "<p>No status available.</p>";
    }
});
