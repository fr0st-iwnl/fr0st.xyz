location = location.hash||"#home"
changeTab(location.hash.slice(1))

function changeTab(tab) {
    // 'Print' animation
    document.querySelectorAll('.fade-in.visible').forEach(element => {
        element.classList.remove('visible');
    });

    let elements = document.getElementById(tab).querySelectorAll('*');
    let delay = 0;
    Array.from(elements).forEach(element => {
        element.classList.add('fade-in');
        setTimeout(function() {
            element.classList.add('visible');
        }, delay);
        delay += 30;
    });
}


// Load effects if not disabled
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'effects.css';

let effectsDisabled = localStorage.getItem('effectsDisabled') === 'true';
let nfbText = document.getElementById('changeEffects');

// Turn off major effects on default for mobile devices
if (window.matchMedia("(max-width: 767px)").matches && !('effectsDisabled' in localStorage)) {
    effectsDisabled = true;
}

if (!effectsDisabled) { document.head.appendChild(link); nfbText.innerHTML = 'Don\'t like the effects? Click <a onclick="changeEffects()">HERE</a> to turn them off.';}

function changeEffects() {
    effectsDisabled = !effectsDisabled;
    localStorage.setItem('effectsDisabled', effectsDisabled);
    if (effectsDisabled) {
        document.head.removeChild(link);
        nfbText.innerHTML = 'Want some fancy effects? Click <a onclick="changeEffects()">HERE</a> to turn them on.';
    } else {
        document.head.appendChild(link);
        nfbText.innerHTML = 'Don\'t like the effects? Click <a onclick="changeEffects()">HERE</a> to turn them off.';
    }
}



console.log('%c Designed and Developed by Kiyoko / fr0st-iwnl ', 'background-image: linear-gradient(90deg,#8000ff,#660066); color: white;font-weight:900;font-size:1rem; padding:20px;');
