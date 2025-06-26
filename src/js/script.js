const default_hash = '#home';
const fade_in_delay = 27 // lower values makes the elements show faster on site loading and while changing tabs

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';

document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    // Get all hidden update elements
    const hiddenUpdates = document.querySelectorAll('.hidden-update');
    
    // Process each hidden update
    hiddenUpdates.forEach(update => {
        // Get the em element that contains the date
        const dateEm = update.querySelector('em');
        
        if (dateEm) {
            // Check if it already has the ✖ symbol
            if (!dateEm.textContent.includes('✖')) {
                // Add the ✖ symbol at the beginning
                dateEm.innerHTML = '✖ ' + dateEm.innerHTML;
            }
        }
    });
    
    // COMMENTED: SO IF I DONT LIKE IT I CAN REMOVE IT
    // ADD: SMALL DELAY TO ENSURE ELEMENTS ARE LOADED BEFORE SCROLLING
    setTimeout(function() {
        const currentHash = location.hash || default_hash;
        const targetElement = document.getElementById(currentHash.slice(1));
        
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }, 100);
    // END OF THE COMMENT: SMALL DELAY TO ENSURE ELEMENTS ARE LOADED BEFORE SCROLLING
});

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
        
        // COMMENTED: SO IF I DONT LIKE IT I CAN REMOVE IT
        setTimeout(function() {
            document.getElementById(tab).scrollIntoView({behavior: 'smooth', block: 'start'});
        }, 100);
        
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

    // HIDE SNOWFLAKES
    const snowflakeContainer = document.getElementById('snow-container');
    if (snowflakeContainer) {
        snowflakeContainer.innerHTML = ''; // Remove all snowflakes
    }

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
            // ✅ Check if the effects.css link exists before removing
            let effectsLink = document.querySelector('link[href="effects.css"]');
            if (effectsLink) {
                document.head.removeChild(effectsLink);
            }
            break;
        case 'winter':
            document.documentElement.style.setProperty('--bg-color', '30, 40, 60');
            document.documentElement.style.setProperty('--main-color', '#a9c8d8');
            document.documentElement.style.setProperty('--selection', '#536f85');
            document.documentElement.style.setProperty('--bg-opacity', '0.85');
        snowAnimation();
        break;
    }
    if (effectsDisabled) {rain_vid.style.display = 'none';}
}


/**
 * SNOWFLAKES ANIMATION
 */

function snowAnimation() {
    const effectsDisabled = false; // Set this flag to `false` to ensure snowflakes are enabled.

    // Ensure snowflake container exists
    const snowflakeContainer = document.getElementById('snow-container');
    if (!snowflakeContainer) {
        console.error("Snow container not found!");
        return;
    }

    const snowflakeCount = 90;  // Number of snowflakes to create
    const snowflakeSize = 6;    // Maximum size of the snowflakes
    const snowflakeDuration = 15;  // Duration of snowflake fall animation

    // Clear any previous snowflakes before adding new ones
    snowflakeContainer.innerHTML = '';

    // Generate snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        let size = Math.random() * snowflakeSize + 0.25; // Random size between 0.25 and 6
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        snowflake.style.top = `${Math.random() * -20}vh`;  // Start off-screen above

        snowflake.style.opacity = Math.random() * 0.6 + 0.1;  // Random opacity for snowflakes

        snowflake.style.animation = `snowflake-fall ${snowflakeDuration + Math.random() * 10}s linear infinite`;

        // Randomize horizontal movement for a more natural look
        if (Math.random() > 0.3) {
            const horizontalAnimation = Math.random() > 0.5 ? 'snowflake-fall-horizontal-1' : 'snowflake-fall-horizontal-2';
            snowflake.style.animation = `${horizontalAnimation} ${snowflakeDuration + Math.random() * 10}s linear infinite`;
        }

        snowflake.style.animationDelay = `-${(snowflakeDuration + Math.random() * 50) / 4}s`;  // Randomize start delay

        snowflakeContainer.appendChild(snowflake);
    }
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
    const button = this;
    
    // Check if updates are currently hidden
    const areUpdatesHidden = hiddenUpdates[0] && hiddenUpdates[0].style.display !== "block";
    
    if (areUpdatesHidden) {
        // Show hidden updates
        hiddenUpdates.forEach(update => {
            update.style.display = "block";
        });
        button.textContent = " < Show Less >"; // Change button text
    } else {
        // Hide updates
        hiddenUpdates.forEach(update => {
            update.style.display = "none";
        });
        button.textContent = " < Show More >"; // Restore button text
    }
});



/**
 * HAMBURGER / NAVBAR
 */


function toggleMenu() {
    const menu = document.getElementById("nav_tabs");
    const hamburger = document.getElementById("hamburger-menu");
    
    menu.classList.toggle("active");
    hamburger.classList.toggle("active"); 
}

const menuItems = document.querySelectorAll("#nav_tabs li a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        toggleMenu();
    });
});

// Close the menu if the user clicks anywhere outside the navbar or hamburger
document.addEventListener('click', function(event) {
    const menu = document.getElementById("nav_tabs");
    const hamburger = document.getElementById("hamburger-menu");
    
    // Check if the click happened outside the menu and hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        // Close the menu
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
});


function initTooltips() {
    // Create tooltip container
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    const OFFSET_X = 12; // Horizontal offset from cursor
    const OFFSET_Y = 12; // Vertical offset from cursor

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            tooltipElement.textContent = tooltipText;
            tooltipElement.style.opacity = '1'; // Make it visible
        });

        tooltip.addEventListener('mousemove', (event) => {
            // Use event.pageX and event.pageY to fix the scroll bug
            let x = event.pageX + OFFSET_X;
            let y = event.pageY + OFFSET_Y;

            // Prevent tooltip from leaving the right edge
            if (x + tooltipElement.offsetWidth > document.documentElement.clientWidth + window.scrollX) {
                x = document.documentElement.clientWidth + window.scrollX - tooltipElement.offsetWidth - OFFSET_X;
            }

            // Prevent tooltip from leaving the bottom edge
            if (y + tooltipElement.offsetHeight > document.documentElement.clientHeight + window.scrollY) {
                y = event.pageY - tooltipElement.offsetHeight - OFFSET_Y; // Move above if no space below
            }

            tooltipElement.style.left = `${x}px`;
            tooltipElement.style.top = `${y}px`;
        });

        tooltip.addEventListener('mouseleave', () => {
            tooltipElement.style.opacity = '0';
        });
    });
}

/**
 * Mobile Dropdown Toggle
 */
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                dropdownToggle.classList.remove('active');
            }
        });
    }
});
