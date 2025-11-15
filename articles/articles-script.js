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
 * DETECTION IF VIEWS ARE DOWN (VOUX.FR0ST.XYZ)
 */
const VIEW_COUNTER_HOST = 'voux.fr0st.xyz';
const VIEW_COUNTER_TIMEOUT = 1000;

function initViewCounters() {
    const counters = document.querySelectorAll('.counter-box .counter');

    counters.forEach(counterEl => {
        const viewScript = counterEl.querySelector(`script[src*="${VIEW_COUNTER_HOST}/embed/"]`);

        if (!viewScript || viewScript.dataset.viewCounterInit === 'true') {
            return;
        }

        viewScript.dataset.viewCounterInit = 'true';

        const hasContent = () => counterEl.textContent.trim().length > 0;

        if (hasContent()) {
            return;
        }

        let fallbackTimer = null;
        let observer = null;

        const cleanup = () => {
            if (fallbackTimer) {
                clearTimeout(fallbackTimer);
                fallbackTimer = null;
            }

            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };

        const showError = () => {
            cleanup();
            counterEl.textContent = `${VIEW_COUNTER_HOST} is down :(`;
        };

        observer = new MutationObserver(() => {
            if (hasContent()) {
                cleanup();
            }
        });

        observer.observe(counterEl, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        fallbackTimer = window.setTimeout(() => {
            if (!hasContent()) {
                showError();
            } else {
                cleanup();
            }
        }, VIEW_COUNTER_TIMEOUT);

        viewScript.addEventListener('error', showError, { once: true });

        viewScript.addEventListener('load', () => {
            if (hasContent()) {
                cleanup();
            }
        }, { once: true });
    });
}


/**
 * COPY BUTTON FUNCTIONALITY FOR CODEBLOCKS IN BLOGS
 */
function copyCode(button) {
    // Get the code element for THIS button every time
    const codeBlock = button.closest('.blog-code-block');
    const codeElement = codeBlock.querySelector('code');
    const textToCopy = codeElement.textContent || codeElement.innerText;
    
    // Check if this specific button is locked
    if (button.dataset.locked === 'true') {
        const currentCount = parseInt(button.dataset.spamCount || '0');
        const spamMessages = [
            "Copied again!",
            "Okay paste it somewhere", 
            "DUDE ITS COPIED",
            ":("
        ];
       
        if (currentCount < spamMessages.length) {
            button.innerHTML = `<i class="fa-solid fa-copy"></i> ${spamMessages[currentCount]}`;
            button.dataset.spamCount = (currentCount + 1).toString();
        } else {
            button.innerHTML = `<i class="fa-solid fa-copy"></i> :(`;
        }
       
        // still copy the text even during spam messages
        navigator.clipboard.writeText(textToCopy).catch(err => {
            console.error('Failed to copy during spam: ', err);
        });
       
        // Reset this button's timeout
        if (button.lockTimeout) {
            clearTimeout(button.lockTimeout);
        }
       
        button.lockTimeout = setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
            button.style.background = 'transparent';
            button.style.borderColor = 'var(--main-color)';
            button.style.color = 'var(--main-color)';
            button.dataset.locked = 'false';
            button.dataset.spamCount = '0';
            button.lockTimeout = null;
        }, 3000);
       
        return;
    }
   
    // RESET ALL OTHER BUTTONS' SPAM COUNTS when copying from a new button
    document.querySelectorAll('.copy-btn').forEach(btn => {
        if (btn !== button && btn.dataset.locked !== 'true') {
            btn.dataset.spamCount = '0';
        }
    });
   
    // Lock this specific button
    button.dataset.locked = 'true';
    button.dataset.spamCount = '0'; // Start fresh for this button
   
    navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerHTML = '<i class="fa-solid fa-copy"></i> Copied!';
       
        // Set timeout to unlock this button
        button.lockTimeout = setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
            button.style.background = 'transparent';
            button.style.borderColor = 'var(--main-color)';
            button.style.color = 'var(--main-color)';
            button.dataset.locked = 'false';
            button.dataset.spamCount = '0';
            button.lockTimeout = null;
        }, 3000);
       
    }).catch(err => {
        console.error('Failed to copy: ', err);
        button.dataset.locked = 'false';
        button.dataset.spamCount = '0';
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
    initViewCounters();
});

/**
 * Give each heading an ID (if it doesn't have one) and update its anchor link
 */
document.querySelectorAll('h2, h3, h4, h5, h6').forEach(heading => {
  // If no ID, generate one from the heading text
  if (!heading.id) {
    heading.id = heading.textContent
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')     // remove special chars
      .replace(/\s+/g, '-')         // replace spaces with dashes
      .replace(/-+/g, '-')          // collapse multiple dashes
      .replace(/^-+|-+$/g, '');     // remove leading/trailing dashes
  }

  // Update anchor if present
  const anchor = heading.querySelector('.anchor');
  if (anchor) {
    anchor.href = `#${heading.id}`;
  }
});

// make functions global so onclick can access them
window.copyCode = copyCode;
window.shareLink = shareLink;
