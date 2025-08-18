import '/src/js/components/base.js';

/////////////////////////////////////////////// ARTICLES ///////////////////////////////////////////////

const articles = [
    {
        title: "My Music Setup on PC and Phone",
        description: "The music apps I use on PC and phone, how I make them work for me, and what I think about them.",
        link: "articles/article6.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/music-setup.png",
        date: "August 18, 2025"
    },
    /*{
        title: "Appreciation Is Rare, and That's the Problem",
        description: "This isn't life advice. Just me sharing how it feels when people act like they don't care. Support and appreciation matter more than most people realize.",
        link: "articles/article6.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/appreciationisrare.png",
        date: "July 6, 2025"
    },*/
    {
        title: "WinMacros: Custom Windows Macros",
        description: "A tool I made to automate tasks and control my system with simple macros.",
        link: "articles/article5.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/winmacros.png",
        date: "February 26, 2025"
    },
    {
        title: "WinConfigs: Simplifying Windows Setup",
        description: "A script that I made to simplify Windows setup using automation and system tweaks.",
        link: "articles/article4.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/winconfigs.png",
        date: "February 5, 2025"
    },
    {
        title: "Why Tailwind CSS Isn't for Me",
        description: "Sharing my thoughts on why I just don't like Tailwind CSS.",
        link: "articles/article3.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/tailwind2.png",
        date: "November 6, 2024"
    },
    {
        title: "My first Linux experience",
        description: "Journey of a Linux newbie.",
        link: "articles/article2.html", 
        class: "article-two",
        thumbnail: "./src/media/blog-thumbnails/linux.png",
        date: "October 22, 2024"
    },
    {
        title: "Hello World, may I say?",
        description: "The blog is now here with updates about my journey.",
        link: "articles/article1.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/lain.jpg",
        date: "October 20, 2024"
    }
];


const articleSection = document.getElementById("article-section");


articleSection.innerHTML = '';

articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.className = `article ${article.class}`;

    articleDiv.innerHTML = `
        <div class="article-thumbnail-container">
            <img src="${article.thumbnail}" alt="${article.title} thumbnail" class="article-thumbnail">
        </div>
        <div class="article-content">
            <h2 class="article-title">${article.title}</h2>
            <span class="article-date">${article.date}</span>
            <p class="article-description">${article.description}</p>
        </div>
        <div class="read-more-container">
            <a href="${article.link}" class="read-more">Read More</a>
        </div>
    `;

    articleSection.appendChild(articleDiv);
});