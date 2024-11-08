const default_hash = '#home';
const fade_in_delay = 27 // lower values makes the elements show faster on site loading and while changing tabs

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';

// remove 'rgb' and brackets from --bg-value so the color can be used in combination with individual opacity-values (rgba)
document.documentElement.style.setProperty('--bg-color', getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim().replace(/rgb\(|\)/g, ''));

location = location.hash||default_hash
changeTab(location.hash.slice(1));

window.addEventListener('hashchange', function() {
    changeTab(location.hash.slice(1));
})

function changeTab(tab) {
    try {
        // Hide all visible elements
        document.querySelectorAll('.fade-in.visible').forEach(element => {
            element.classList.remove('visible');
            element.classList.remove('fade-in-anim');
        });

        // Remove active tab class from all tab_switchers
        document.querySelectorAll('.tab_switcher').forEach(element => { 
            element.classList.remove('tab_active'); 
        });

        // Activate the selected tab
        document.getElementById(tab + '_tab').classList.add('tab_active');

        // Show elements of the selected tab
        let elements = document.getElementById(tab).querySelectorAll('*');
        
        if (!effectsDisabled) {
            let delay = 0;
            Array.from(elements).forEach(element => {
                element.classList.add('fade-in');
                setTimeout(function() {
                    element.classList.add('visible');
                    element.classList.add('fade-in-anim');
                }, delay);
                delay += fade_in_delay;
            });
        } else {
            // If effects are disabled, make elements visible directly
            Array.from(elements).forEach(element => {
                element.classList.add('visible'); // Ensure elements are visible
            });
        }
    } catch {
        location.hash = default_hash;
    }
}


// Picture-Collection
function changeColl(coll) {
    document.querySelectorAll('.pic_coll').forEach(element => { element.style.display = 'none';});
    document.getElementById(coll).style.display = 'block';
    document.querySelectorAll('.pic_coll_tabs').forEach(element => { element.classList.remove('tab_active');});
    this.event.target.classList.add('tab_active');
}

// Load effects if not disabled
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'effects.css';

let nfbText = document.getElementById('changeEffects');

// Turn off major effects on default for mobile devices (performance issues on some mobile browsers)
if (window.matchMedia("(max-width: 767px)").matches && !('effectsDisabled' in localStorage)) { effectsDisabled = true;}
if (!effectsDisabled) { document.head.appendChild(link); nfbText.innerHTML = 'Don\'t like the effects? Click <a onclick="changeEffects()">HERE</a> to turn them off.';}

function changeEffects() {
    localStorage.setItem('effectsDisabled', !effectsDisabled);
    location.reload();
}

// Themes
if ('theme' in localStorage) {
    changeTheme(localStorage.getItem('theme'));
} // PUT DEFAULT THEME HERE // else {
//     changeTheme('ocean'); // Setting 'ocean' as the default theme
// }

function changeTheme(theme) {
    localStorage.setItem('theme', theme);
    let noise_vid = document.getElementById('noise_vid');
    let rain_vid = document.getElementById('rain_vid');
    // show > and < on selected theme
    let theme_list_items = document.getElementById('theme_list').children;
    Array.from(theme_list_items).forEach(item => {
        let a = item.firstChild
        if (a.innerHTML.includes(theme)) {
            a.innerHTML = '> ' + theme + ' <'
        } else {
            a.innerHTML = a.innerHTML.replace(/(&gt|&lt|;|\s)/g, '');
        }
    })
    // default values
    document.documentElement.style.setProperty('--bg-opacity', '0.31');
    rain_vid.style.display = 'none';
    noise_vid.style.opacity = 0.5;
    if (!document.head.contains(link) && !effectsDisabled) {document.head.appendChild(link);}
    switch (theme) { 
        case 'ocean':
            document.documentElement.style.setProperty('--bg-color', '15, 129, 236');
            document.documentElement.style.setProperty('--main-color', '#72b6ff');
            document.documentElement.style.setProperty('--selection', '#3b6d8b');
            noise_vid.style.opacity = 0.3;
            break;
        case 'terminal':
            document.documentElement.style.setProperty('--bg-color', '61, 150, 51');
            document.documentElement.style.setProperty('--main-color', '#6dfd60');
            document.documentElement.style.setProperty('--selection', '#3b8b42');
            break;
        case 'cherry':
            document.documentElement.style.setProperty('--bg-color', '192, 63, 63');
            document.documentElement.style.setProperty('--main-color', '#fd6060');
            document.documentElement.style.setProperty('--selection', '#8b3b3b');
            break;
        case 'amber':
            document.documentElement.style.setProperty('--bg-color', '179, 105, 21');
            document.documentElement.style.setProperty('--main-color', '#fda93c');
            document.documentElement.style.setProperty('--selection', '#946612');
            break;
        case 'deepsea':
            document.documentElement.style.setProperty('--bg-color', '9, 95, 92');
            document.documentElement.style.setProperty('--main-color', '#cbe9d1');
            document.documentElement.style.setProperty('--selection', '#56705a');
            break;
        case 'danger':
            document.documentElement.style.setProperty('--bg-color', '121, 6, 2');
            document.documentElement.style.setProperty('--main-color', '#e62b2b');
            document.documentElement.style.setProperty('--selection', '#941212');
            document.documentElement.style.setProperty('--bg-opacity', '0.494');
            break;
        case 'rainy':
            document.documentElement.style.setProperty('--bg-color', '15, 129, 236');
            document.documentElement.style.setProperty('--main-color', '#a4cdf8');
            document.documentElement.style.setProperty('--selection', '#3b6d8b');
            rain_vid.style.display = 'block';
            break;
        case 'neon':
            document.documentElement.style.setProperty('--bg-color', '62, 73, 232'); // The background color in RGB format
            document.documentElement.style.setProperty('--main-color', '#5662F6'); // Main color
            document.documentElement.style.setProperty('--selection', '#A8B2FF'); // Selection color
            // No specific actions needed for `noise_vid` or `rain_vid` in this theme
            break;
        case 'win95':
            document.documentElement.style.setProperty('--bg-color', '0, 128, 129');
            document.documentElement.style.setProperty('--main-color', '#ffffff');
            document.documentElement.style.setProperty('--selection', '#3b6d8b');
            document.documentElement.style.setProperty('--bg-opacity', '1.0');
            noise_vid.style.opacity = 0;
            document.head.removeChild(link);
            break;
    }
    if (effectsDisabled) {rain_vid.style.display = 'none';}
}




/////////////////////////////////////// PROJECT CATEGORIES ///////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Initialize with Web Dev projects displayed
    changeColl('webdev');
});

function changeColl(category) {
    // Get all project list items
    const projects = document.querySelectorAll('#pr_list li');

    // Loop through each project item
    projects.forEach(project => {
        // Check if the project belongs to the selected category
        if (project.getAttribute('data-category') === category) {
            project.style.display = ''; // Show the project
        } else {
            project.style.display = 'none'; // Hide the project
        }
    });

    // Update the active class on the tabs
    const tabs = document.querySelectorAll('.pic_coll_tabs');
    tabs.forEach(tab => {
        tab.classList.remove('tab_active'); // Remove active class from all tabs
    });
    
    // Add active class to the currently selected tab
    const activeTab = document.querySelector(`.pic_coll_tabs[onclick="changeColl('${category}')"]`);
    if (activeTab) {
        activeTab.classList.add('tab_active');
    }
}

// Add event listener to the links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        // Check if the clicked link is the projects link
        if (this.getAttribute('href') === '#projects') {
            // Ensure the webdev category is shown
            changeColl('webdev');
        }
    });
});

// Also handle the hash change for back/forward navigation
window.addEventListener('hashchange', function() {
    if (location.hash === '#projects') {
        changeColl('webdev');
    }
});

// Initialize with Web Dev projects displayed on load
document.addEventListener('DOMContentLoaded', function() {
    if (location.hash === '#projects') {
        changeColl('webdev');
    }
});



// show more for latest updates

document.getElementById("show-more-btn").addEventListener("click", function() {
    const hiddenUpdates = document.querySelectorAll(".hidden-update");
    hiddenUpdates.forEach(update => {
        update.style.display = "block"; // show hidden updates
    });
    this.style.display = "none"; // hide the show more button after clicking it
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('%c Designed and Developed by Kiyoko / fr0st-iwnl ', 'background-image: linear-gradient(90deg,#8000ff,#660066); color: white;font-weight:900;font-size:1rem; padding:20px;');