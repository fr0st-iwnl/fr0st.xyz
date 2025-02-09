const fade_in_delay = 27 // lower values makes the elements show faster on site loading and while changing tabs

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';



// remove 'rgb' and brackets from --bg-value so the color can be used in combination with individual opacity-values (rgba)
document.documentElement.style.setProperty('--bg-color', getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim().replace(/rgb\(|\)/g, ''));

////////////////////////////// WELCOME || RANDOM WORDS ////////////////////////////// 

 const phrases = [
    "this text is random.",
    "a nerd's basement.",
    "a blog.",
    "i code sometimes.",
    "made with a keyboard.",
    "01000100010011",
    "just another day in the void.",
    "another day, another line of code. :[",
    "Smoked Out, Scoped Out",
    "Not Even Ghosts Are This Empty",
    "Newport Reds",
    "Aphrodite (The Aquatic Ape Theory)",
    "Prettyleaf",
    "Noxygen",
    "Grey Boys",
    "Mega Zeph",
    "Meet Mr. NICEGUY",
    "122 Days",
    "King Tulip",
    "CLYDE (I Hope At Least One Of My Ex-Girlfriends Hears This)",
    "In Constant Sorrow",
    "Shattered Amethyst",
    "Fold",
    "Flodgin'",
    "I Can't Fold (feat. $uicideboy$)",
    "Runnin’ Thru the 7th with My Woadies",
    "I Miss My Dead Friends",
    "Paper Bag Mask",
    "Mannequins Are My Best of Friends",
    "Handzum $uicide",
    "Jon Voight (Live Fast, Die Young)",
    "Aokigahara",
    "Am/Pm",
    "#1 Stunna",
    "close the world. open the next."
];

function getRandomPhrase() {
    let lastPhrase = localStorage.getItem('lastPhrase');
    let newPhrase;

    do {
        newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (newPhrase === lastPhrase); // Ensure a new phrase is chosen

    localStorage.setItem('lastPhrase', newPhrase); // Store the new phrase
    return newPhrase;
}

const welcomeText = document.querySelector('.welcome');

if (welcomeText) {
    const randomPhrase = getRandomPhrase();

    if (randomPhrase === "01000100010011") {
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('glitch'); // glitch class
        numberSpan.setAttribute('data-text', randomPhrase);
        numberSpan.textContent = randomPhrase;
        welcomeText.appendChild(numberSpan);
    } else {
        welcomeText.textContent = randomPhrase;
    }
}



/**
 * EFFECTS
 */

// Load effects if not disabled
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '/effects.css';

let nfbText = document.getElementById('changeEffects');

// Turn off major effects on default for mobile devices (performance issues on some mobile browsers)
if (window.matchMedia("(max-width: 767px)").matches && !('effectsDisabled' in localStorage)) { effectsDisabled = true;}
if (!effectsDisabled) { document.head.appendChild(link); nfbText.innerHTML = 'Don\'t like the effects? Click <a id="changeEffectsLink">HERE</a> to turn them off.';}

// FUNCTION to change effects
function changeEffects() {
    effectsDisabled = !effectsDisabled;
    localStorage.setItem('effectsDisabled', effectsDisabled);
    location.reload();  // Reload page to apply new effect settings
}

// Ensure event listener is added after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const changeEffectsLink = document.getElementById('changeEffectsLink');
    if (changeEffectsLink) {
        changeEffectsLink.addEventListener('click', changeEffects);  // Add click event listener to the link
    }
});

/**
 * THEMES
 */
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

    // Hide any existing snowflakes
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
            document.head.removeChild(link);
            break;
        case 'winter':
        // Darker winter theme styles
        document.documentElement.style.setProperty('--bg-color', '30, 40, 60'); // Darker background (dark blue-gray)
        document.documentElement.style.setProperty('--main-color', '#a9c8d8');   // Lighter snowflake color (frosty)
        document.documentElement.style.setProperty('--selection', '#536f85');    // Darker selection color (frosty blue)
        document.documentElement.style.setProperty('--bg-opacity', '0.85');      // Slightly darker background opacity
        
        // Trigger the snow animation (as before)
        snowAnimation();
        break;
    }
    if (effectsDisabled) {rain_vid.style.display = 'none';}
}


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


