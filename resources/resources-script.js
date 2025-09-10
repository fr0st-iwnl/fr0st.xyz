/**
 * RESOURCES-SCRIPT.JS
 * ----------------------------------------------------------------------
 * Handles functionality for the resources.html page
*/

import '/src/js/components/base.js';

document.addEventListener('DOMContentLoaded', function() {

    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.03}s`;
        card.classList.add('fade-in');
    });

    const addScrollToTopButton = () => {

        const scrollBtn = document.createElement('div');
        scrollBtn.className = 'go-up-btn';
        scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    addScrollToTopButton();

    let scrollTimeout;
    window.addEventListener('scroll', function() {

        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(function() {

            resourceGroups.forEach(group => {

                if (group.style.display === 'block' || group.style.display === '') {

                    if (!group.querySelector('h2') && !group.querySelector('.category-header')) {

                        setupPaginationForGroup(group);
                    }
                }
            });
        }, 100); 
    });

    const categoryButtons = document.querySelectorAll('.category-btn');
    const resourceGroups = document.querySelectorAll('.resource-group');
    const noResults = document.getElementById('no-results');
    const resetSearchButton = document.getElementById('reset-search'); 

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {

            categoryButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            const category = button.getAttribute('data-category');

            filterResources(category);
        });
    });

    const searchInput = document.getElementById('resource-search');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') {
            resetSearch();
        } else {
            searchResources(searchTerm);
        }
    });

    function resetSearch() {

        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');

        resourceGroups.forEach(group => {

            const shouldShow = (activeCategory === 'all' || group.getAttribute('data-category') === activeCategory);

            let categoryTitle = '';
            let categoryIcon = '';

            const h2 = group.querySelector('h2');
            const categoryHeader = group.querySelector('.category-header');

            if (h2) {

                categoryTitle = h2.textContent;
                categoryIcon = h2.querySelector('i')?.outerHTML || '';
            } else if (categoryHeader) {

                const headerH2 = categoryHeader.querySelector('h2');
                if (headerH2) {
                    categoryTitle = headerH2.textContent;
                    categoryIcon = headerH2.querySelector('i')?.outerHTML || '';
                }
            }

            if (shouldShow && categoryTitle) {

                if (categoryHeader) {
                    categoryHeader.remove();
                }

                if (h2) {
                    h2.remove();
                }

                const newH2 = document.createElement('h2');
                newH2.innerHTML = categoryIcon + ' ' + categoryTitle;

                group.insertBefore(newH2, group.firstChild);

                const cards = group.querySelectorAll('.resource-card');
                cards.forEach(card => {
                    card.style.display = 'flex';
                });

                group.style.display = 'block';
            } else {

                group.style.display = 'none';
            }
        });

        noResults.style.display = 'none';

        setupPagination();

        animateVisibleCards();
    }

    if (resetSearchButton) {
        resetSearchButton.addEventListener('click', () => {

            searchInput.value = '';

            categoryButtons.forEach(btn => {
                if (btn.getAttribute('data-category') === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            filterResources('all');

            noResults.style.display = 'none';

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function filterResources(category) {

        if (searchInput.value) {
            searchInput.value = '';
        }

        resourceGroups.forEach(group => {

            const shouldShow = (category === 'all' || group.getAttribute('data-category') === category);

            let categoryTitle = '';
            let categoryIcon = '';

            const h2 = group.querySelector('h2');
            const categoryHeader = group.querySelector('.category-header');

            if (h2) {

                categoryTitle = h2.textContent;
                categoryIcon = h2.querySelector('i')?.outerHTML || '';
            } else if (categoryHeader) {

                const headerH2 = categoryHeader.querySelector('h2');
                if (headerH2) {
                    categoryTitle = headerH2.textContent;
                    categoryIcon = headerH2.querySelector('i')?.outerHTML || '';
                }
            }

            if (shouldShow && categoryTitle) {

                if (categoryHeader) {
                    categoryHeader.remove();
                }

                if (h2) {
                    h2.remove();
                }

                const newH2 = document.createElement('h2');
                newH2.innerHTML = categoryIcon + ' ' + categoryTitle;

                group.insertBefore(newH2, group.firstChild);

                const cards = group.querySelectorAll('.resource-card');
                cards.forEach(card => {

                    card.classList.remove('fade-in');
                    card.style.display = 'none';
                });

                group.style.display = 'block';
            } else {

                group.style.display = 'none';
            }
        });

        const visibleGroups = document.querySelectorAll('.resource-group[style*="display: block"]');
        noResults.style.display = visibleGroups.length === 0 ? 'block' : 'none';

        setupPagination();

    }

    function searchResources(searchTerm) {

        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');

        let totalVisible = 0;
        let visibleGroups = 0;

        resourceGroups.forEach(group => {

            if (activeCategory !== 'all' && group.getAttribute('data-category') !== activeCategory) {
                group.style.display = 'none';
                return;
            }

            let categoryTitle = '';
            let categoryIcon = '';

            const h2 = group.querySelector('h2');
            const categoryHeader = group.querySelector('.category-header');

            if (h2) {

                categoryTitle = h2.textContent;
                categoryIcon = h2.querySelector('i')?.outerHTML || '';
            } else if (categoryHeader) {

                const headerH2 = categoryHeader.querySelector('h2');
                if (headerH2) {
                    categoryTitle = headerH2.textContent;
                    categoryIcon = headerH2.querySelector('i')?.outerHTML || '';
                }
            }

            const cards = group.querySelectorAll('.resource-card');
            let visibleCards = 0;

            cards.forEach(card => {
                const cardContent = card.textContent.toLowerCase();
                const cardTags = card.getAttribute('data-tags') || '';

                if (searchTerm === '' || cardContent.includes(searchTerm) || cardTags.toLowerCase().includes(searchTerm)) {

                    card.setAttribute('data-search-match', 'true');
                    visibleCards++;
                    totalVisible++;
                } else {

                    card.setAttribute('data-search-match', 'false');
                }

                card.style.display = 'none';
            });

            if (visibleCards > 0) {

                if (categoryHeader) {
                    categoryHeader.remove();
                }

                if (h2) {
                    h2.remove();
                }

                const newH2 = document.createElement('h2');
                newH2.innerHTML = categoryIcon + ' ' + categoryTitle;

                group.insertBefore(newH2, group.firstChild);

                group.style.display = 'block';
                visibleGroups++;
            } else {
                group.style.display = 'none';
            }
        });

        noResults.style.display = totalVisible === 0 ? 'block' : 'none';

        setupPaginationForSearch();
    }

    function setupPaginationForSearch() {
        const resourceGroups = document.querySelectorAll('.resource-group[style*="display: block"]');
        const ITEMS_PER_PAGE = 6;

        resourceGroups.forEach(group => {
            const matchingCards = Array.from(group.querySelectorAll('.resource-card[data-search-match="true"]'));

            if (matchingCards.length === 0) {
                return;
            }

            if (matchingCards.length <= ITEMS_PER_PAGE) {

                matchingCards.forEach((card, i) => {
                    card.classList.remove('fade-in');
                    void card.offsetWidth; 
                    card.style.display = 'flex';
                    card.style.animationDelay = `${i * 0.01}s`;
                    card.classList.add('fade-in');
                });
                return;
            }

            const totalPages = Math.ceil(matchingCards.length / ITEMS_PER_PAGE);
            let currentPage = 1;

            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';

            const inlinePagination = document.createElement('div');
            inlinePagination.className = 'inline-pagination';

            let h2 = group.querySelector('h2');
            if (!h2) return;

            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-nav prev-page disabled';
            prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            prevBtn.setAttribute('aria-label', 'Previous page');

            const pageIndicator = document.createElement('div');
            pageIndicator.className = 'page-indicator';
            pageIndicator.textContent = `${currentPage}/${totalPages}`;

            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-nav next-page';
            nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextBtn.setAttribute('aria-label', 'Next page');

            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    goToPage(--currentPage);
                }
            });

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    goToPage(++currentPage);
                }
            });

            inlinePagination.appendChild(prevBtn);
            inlinePagination.appendChild(pageIndicator);
            inlinePagination.appendChild(nextBtn);

            const h2Text = h2.textContent;
            const h2Icon = h2.querySelector('i')?.outerHTML || '';

            const newH2 = document.createElement('h2');
            newH2.innerHTML = h2Icon + ' ' + h2Text;

            if (h2.parentNode === group) {
                group.removeChild(h2);
            }

            categoryHeader.appendChild(newH2);
            categoryHeader.appendChild(inlinePagination);

            group.insertBefore(categoryHeader, group.firstChild);

            function goToPage(page) {
                currentPage = page;

                prevBtn.classList.toggle('disabled', currentPage === 1);
                nextBtn.classList.toggle('disabled', currentPage === totalPages);

                pageIndicator.textContent = `${currentPage}/${totalPages}`;

                matchingCards.forEach(card => {
                    card.style.display = 'none';
                });

                const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
                const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, matchingCards.length);

                for (let i = startIndex; i < endIndex; i++) {
                    const card = matchingCards[i];
                    card.classList.remove('fade-in');
                    void card.offsetWidth; 
                    card.style.display = 'flex';
                    card.style.animationDelay = `${(i - startIndex) * 0.01}s`;
                    card.classList.add('fade-in');
                }
            }

            goToPage(1);
        });
    }

    function animateVisibleCards() {
        const visibleCards = document.querySelectorAll('.resource-card[style*="display: flex"]');

        visibleCards.forEach((card, index) => {

            card.classList.remove('fade-in');

            void card.offsetWidth;

            card.style.animationDelay = `${index * 0.04}s`;
            card.classList.add('fade-in');
        });
    }

    function setupPagination() {
        const resourceGroups = document.querySelectorAll('.resource-group');
        const ITEMS_PER_PAGE = 6; 

        resourceGroups.forEach(group => {

            if (group.style.display === 'none') {
                return;
            }

            const cards = group.querySelectorAll('.resource-card');

            if (cards.length <= ITEMS_PER_PAGE) {

                cards.forEach((card, i) => {
                    card.classList.remove('fade-in');
                    void card.offsetWidth; 
                    card.style.display = 'flex';

                    card.style.animationDelay = `${i * 0.01}s`;
                    card.classList.add('fade-in');
                });
                return;
            }

            const existingHeader = group.querySelector('.category-header');
            if (existingHeader) {

                const pageIndicator = existingHeader.querySelector('.page-indicator');
                if (pageIndicator) {

                    showFirstPage(cards);
                    return;
                }
            }

            let h2 = group.querySelector('h2');
            if (!h2) {

                const categoryHeader = group.querySelector('.category-header');
                if (categoryHeader) {
                    h2 = categoryHeader.querySelector('h2');
                }

                if (!h2) return;
            }

            const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
            let currentPage = 1;

            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';

            const inlinePagination = document.createElement('div');
            inlinePagination.className = 'inline-pagination';

            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-nav prev-page disabled';
            prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            prevBtn.setAttribute('aria-label', 'Previous page');
            prevBtn.addEventListener('click', (e) => {

                e.preventDefault();

                if (currentPage > 1) {

                    const scrollPosition = window.scrollY;

                    goToPage(--currentPage);

                    setTimeout(() => {
                        window.scrollTo({
                            top: scrollPosition,
                            behavior: 'auto' 
                        });
                    }, 10);
                }
            });

            const pageIndicator = document.createElement('div');
            pageIndicator.className = 'page-indicator';
            pageIndicator.textContent = `${currentPage}/${totalPages}`;

            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-nav next-page';
            nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextBtn.setAttribute('aria-label', 'Next page');
            nextBtn.addEventListener('click', (e) => {

                e.preventDefault();

                if (currentPage < totalPages) {

                    const scrollPosition = window.scrollY;

                    goToPage(++currentPage);

                    setTimeout(() => {
                        window.scrollTo({
                            top: scrollPosition,
                            behavior: 'auto' 
                        });
                    }, 10);
                }
            });

            inlinePagination.appendChild(prevBtn);
            inlinePagination.appendChild(pageIndicator);
            inlinePagination.appendChild(nextBtn);

            const h2Text = h2.textContent;
            const h2Icon = h2.querySelector('i')?.outerHTML || '';

            const newH2 = document.createElement('h2');
            newH2.innerHTML = h2Icon + ' ' + h2Text;

            if (h2.parentNode === group) {
                group.removeChild(h2);
            }

            categoryHeader.appendChild(newH2);
            categoryHeader.appendChild(inlinePagination);

            group.insertBefore(categoryHeader, group.firstChild);

            function showFirstPage(cards) {

                cards.forEach(card => {
                    card.style.display = 'none';
                });

                for (let i = 0; i < Math.min(ITEMS_PER_PAGE, cards.length); i++) {
                    const card = cards[i];
                    card.classList.remove('fade-in');
                    void card.offsetWidth; 
                    card.style.display = 'flex';
                    card.style.animationDelay = `${i * 0.01}s`; 
                    card.classList.add('fade-in');
                }

                if (prevBtn) prevBtn.classList.add('disabled');
                if (nextBtn) nextBtn.classList.toggle('disabled', cards.length <= ITEMS_PER_PAGE);
                if (pageIndicator) pageIndicator.textContent = `1/${totalPages}`;
            }

            function goToPage(page) {

                currentPage = page;

                prevBtn.classList.toggle('disabled', currentPage === 1);
                nextBtn.classList.toggle('disabled', currentPage === totalPages);

                pageIndicator.textContent = `${currentPage}/${totalPages}`;

                cards.forEach(card => {
                    card.style.display = 'none';
                });

                const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
                const endIndex = startIndex + ITEMS_PER_PAGE - 1;

                const cardsToShow = [];

                cards.forEach((card, index) => {
                    if (index >= startIndex && index <= endIndex) {
                        cardsToShow.push(card);
                    }
                });

                cardsToShow.forEach((card, i) => {
                    card.classList.remove('fade-in');
                    void card.offsetWidth; 
                    card.style.display = 'flex';
                    card.style.animationDelay = `${i * 0.01}s`;
                    card.classList.add('fade-in');
                });
            }

            showFirstPage(cards);
        });
    }

    setupPagination();
});

function setupPaginationForGroup(group) {
    const categoryData = group.getAttribute('data-category');
    let headerTitle = '';
    let headerIcon = '';

    if (categoryData === 'design') {
        headerTitle = 'Design';
        headerIcon = '<i class="fa-solid fa-palette"></i>';
    } else if (categoryData === 'recording') {
        headerTitle = 'Recording & Streaming';
        headerIcon = '<i class="fa-solid fa-video"></i>';
    } else if (categoryData === 'development') {
        headerTitle = 'Development';
        headerIcon = '<i class="fa-solid fa-code"></i>';
    } else if (categoryData === 'automation') {
        headerTitle = 'Automation & System Tools';
        headerIcon = '<i class="fa-solid fa-gear"></i>';
    } else if (categoryData === 'misc') {
        headerTitle = 'Miscellaneous';
        headerIcon = '<i class="fa-solid fa-toolbox"></i>';
    } else {

        headerTitle = 'Resources';
        headerIcon = '<i class="fa-solid fa-list"></i>';
    }

    const newH2 = document.createElement('h2');
    newH2.innerHTML = headerIcon + ' ' + headerTitle;

    group.insertBefore(newH2, group.firstChild);

    setupPagination();
}
