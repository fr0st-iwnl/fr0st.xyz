/**
 * ARTICLES-SCRIPT.JS
 * ----------------------------------------------------------------------
 * Handles functionality for HTML pages inside the "articles" folder.
*/

/**
 * COPY ARTICLE LINK BUTTON [SHARE]
*/
window.shareLink = function(button) {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        button.innerHTML = 'Link copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-share"></i> Share';
            button.classList.remove('copied');
        }, 2000);
    });
};

function shareLink(button) {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.classList.remove('copied');
        }, 2000);
    });
}


/**
 * COPY BUTTON FUNCTIONALITY FOR CODEBLOCKS IN BLOGS
*/

// Copy functionality with spam protection
let copyClickCount = 0;
let isButtonLocked = false;
let lockTimeout = null;

const spamMessages = [
    "Copied again!",
    "Okay paste it somewhere",
    "DUDE ITS COPIED",
    ":("
];

function copyCode(button) {
    // if button is locked show spam message
    if (isButtonLocked) {
        if (copyClickCount < spamMessages.length) {
            button.innerHTML = `<i class="fa-solid fa-copy"></i> ${spamMessages[copyClickCount]}`;
            copyClickCount++;
        } else {
            button.innerHTML = `<i class="fa-solid fa-copy"></i> :(`;
        }
        
        // reset the timeout to extend the lock
        if (lockTimeout) {
            clearTimeout(lockTimeout);
        }
        
        lockTimeout = setTimeout(() => {
            const originalContent = '<i class="fa-solid fa-copy"></i> Copy';
            button.innerHTML = originalContent;
            button.style.background = 'transparent';
            button.style.borderColor = 'var(--main-color)';
            button.style.color = 'var(--main-color)';
            isButtonLocked = false;
            copyClickCount = 0;
            lockTimeout = null;
        }, 3000);
        
        return;
    }

    const codeBlock = button.closest('.blog-code-block');
    const codeElement = codeBlock.querySelector('code');
    const textToCopy = codeElement.textContent || codeElement.innerText;
    
    // lock the button and start spam counter
    isButtonLocked = true;
    copyClickCount = 0; // start from 0 for next spam sequence
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-copy"></i> Copied!';
        
        // set timeout to unlock
        lockTimeout = setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
            button.style.background = 'transparent';
            button.style.borderColor = 'var(--main-color)';
            button.style.color = 'var(--main-color)';
            isButtonLocked = false;
            copyClickCount = 0;
            lockTimeout = null;
        }, 3000);
        
    }).catch(err => {
        console.error('Failed to copy: ', err);
        isButtonLocked = false;
        copyClickCount = 0;
    });
}


/**
 * LANGUAGE DETECTION FOR ARTICLES
*/
const languageConfig = {
    'bash': { icon: 'fa-solid fa-terminal', name: 'Bash' },
    'javascript': { icon: 'fa-brands fa-js-square', name: 'JavaScript' },
    'css': { icon: 'fa-brands fa-css3-alt', name: 'CSS' },
    'html': { icon: 'fa-brands fa-html5', name: 'HTML' },
    'python': { icon: 'fa-brands fa-python', name: 'Python' },
    'php': { icon: 'fa-brands fa-php', name: 'PHP' },
    'java': { icon: 'fa-brands fa-java', name: 'Java' },
    'json': { icon: 'fa-solid fa-file-code', name: 'JSON' },
    'xml': { icon: 'fa-solid fa-code', name: 'XML' },
    'ruby': { icon: 'fa-solid fa-gem', name: 'Ruby' },
    'go': { icon: 'fa-brands fa-golang', name: 'Go' },
    'sql': { icon: 'fa-solid fa-database', name: 'SQL' },
    'typescript': { icon: 'fa-brands fa-js-square', name: 'TypeScript' },
    'scss': { icon: 'fa-brands fa-sass', name: 'SCSS' },
    'yaml': { icon: 'fa-solid fa-file-code', name: 'YAML' },
    'markdown': { icon: 'fa-brands fa-markdown', name: 'Markdown' },
    'dockerfile': { icon: 'fa-brands fa-docker', name: 'Dockerfile' },
    'powershell': { icon: 'fa-solid fa-terminal', name: 'PowerShell' }
};

// yml → yaml exception
languageConfig['yml'] = languageConfig['yaml'];

function detectAndUpdateLanguages() {
    const codeBlocks = document.querySelectorAll('.blog-code-block');
    
    codeBlocks.forEach(block => {
        const codeElement = block.querySelector('code');
        const titleElement = block.querySelector('.code-title');
        
        if (codeElement && titleElement) {
            // detect lang from class
            const classList = codeElement.className;
            const langMatch = classList.match(/language-(\w+)/);
            
            if (langMatch) {
                const language = langMatch[1].toLowerCase();
                const config = languageConfig[language] || { 
                    icon: 'fa-solid fa-code', 
                    name: language.charAt(0).toUpperCase() + language.slice(1) 
                };
                
                // update them
                titleElement.innerHTML = `<i class="${config.icon}"></i> ${config.name}`;
            }
        }
    });
}

/**
 * CALL FUNCTIONS [DOM]
*/
document.addEventListener('DOMContentLoaded', function () {
    detectAndUpdateLanguages();
});

/**
 * Updates heading anchor (.anchor) links to point to the heading's ID
*/
document.querySelectorAll('h2, h3, h4, h5, h6').forEach(heading => {
    const anchor = heading.querySelector('.anchor');
    if (anchor) {
        anchor.href = `#${heading.id}`;
    }
});

// make functions global so onclick can access them
window.copyCode = copyCode;
window.shareLink = shareLink;