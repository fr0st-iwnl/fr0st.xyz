import '/src/js/components/base.js';

/////////////////////////////////////////////// ARTICLES ///////////////////////////////////////////////

const articles = [
    {
        title: "Why Tailwind CSS Isn't for Me",
        description: "Sharing my thoughts on why I just don't like Tailwind CSS.",
        link: "articles/article3.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/tailwind2.png",
        date: "November 6, 2024" // Add date field here
    },
    {
        title: "My first Linux experience",
        description: "Journey of a Linux newbie.",
        link: "articles/article2.html", 
        class: "article-two",
        thumbnail: "./src/media/blog-thumbnails/linux.png",
        date: "October 22, 2024" // Add date field here
    },
    {
        title: "Hello World, may I say?",
        description: "The blog is now here with updates about my journey.",
        link: "articles/article1.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/lain.jpg",
        date: "October 20, 2024" // Add date field here
    }
];


const articleSection = document.getElementById("article-section");


articleSection.innerHTML = '';

articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.className = `article ${article.class}`;

    articleDiv.innerHTML = `
        <img src="${article.thumbnail}" alt="${article.title} thumbnail" class="article-thumbnail">
        <div class="article-header">
            <h2 class="article-title">${article.title}</h2>
            <span class="article-date">${article.date}</span> <!-- Insert the date here -->
        </div>
        <p class="article-description">${article.description}</p>
        <a href="${article.link}" class="read-more">Read More</a>
    `;

    articleSection.appendChild(articleDiv);
});