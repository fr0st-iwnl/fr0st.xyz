/**
 * BLOG-SCRIPT.JS
 * ------------------------------------------------------------------------------------------------------
 * Mainly handles functionality for blog.html, but also manages certain features for article pages.
*/

import '/src/js/components/base.js';

/**
 * ARTICLES
*/
const articles = [
    {
        title: "How to Install and Set Up AtlasOS on Windows",
        description: "Learn how to install AtlasOS, activate Windows, and get your PC ready without bloat.",
        link: "articles/article8.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/atlasos.png",
        date: "November 11, 2025"
    },
    {
        title: "How to Self-Host File Browser on Arch Linux with Cloudflared Tunnels",
        description: "Learn how to set up and run File Browser on Arch Linux using Cloudflare Tunnels to access it from anywhere.",
        link: "articles/article7.html", 
        class: "article-one",
        thumbnail: "./src/media/blog-thumbnails/self-host-filebrowser-tunnels-arch.png",
        date: "September 10, 2025"
    },
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

/**
 * WELCOME / RANDOM WORDS
*/

 const phrases = [
    "this text is random.",
    "a nerd's basement.",
    "a blog.",
    "i code sometimes.",
    "made with a keyboard.",
    "man i jus realized i added so many $uicideboy$ songs in here 😭",
    "honestly, who reads this stuff?",
    "you ever just.. stare at the screen?",
    "wrote this instead of sleeping.",
    "i'm not a professional writer.",
    "i'm just a guy who likes to write sometimes.",
    "just me messing around with text.",
    "00101110011110000111100101111010", /* dont forget to update this too... :( */
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
    "Runnin' Thru the 7th with My Woadies",
    "I Miss My Dead Friends",
    "Paper Bag Mask",
    "Mannequins Are My Best of Friends",
    "Handzum $uicide",
    "Jon Voight (Live Fast, Die Young)",
    "Aokigahara",
    "Am/Pm",
    "#1 Stunna",
    "Lo-Fi (Kill' Em All)",
    "Dejection",
    "Sleepy Hollow - Slopped & Chewed",
    "Whoa, I'm Woeful",
    "A Death in the Ocean Would Be Beautiful",
    "April Mourning",
    "Life Is but a Stream~",
    "Pontiac Sunfire",
    "Behold a Pale Horse",
    "Heavily Medicated",
    "Lettuce",
    "Magazine",
    "Stop Calling Us Horrorcore",
    "close the world. open the next."
];

/**
 * RANDOM PHRASES FUNCTION
*/
function getRandomPhrase() {
    let lastPhrase = localStorage.getItem('lastPhrase');
    let newPhrase;

    do {
        newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (newPhrase === lastPhrase); // Ensure a new phrase is chosen

    localStorage.setItem('lastPhrase', newPhrase); // Store the new phrase
    return newPhrase;
}

/**
 * ADD GLITCH FOR SPECIAL PHRASE
*/
document.addEventListener('DOMContentLoaded', function() {
    // Welcome text setup
    const welcomeText = document.querySelector('.welcome');
    if (welcomeText) {
        const randomPhrase = getRandomPhrase();

        if (randomPhrase === "00101110011110000111100101111010") {
            const numberSpan = document.createElement('span');
            numberSpan.classList.add('glitch');
            numberSpan.setAttribute('data-text', randomPhrase);
            numberSpan.textContent = randomPhrase;
            welcomeText.appendChild(numberSpan);
        } else {
            welcomeText.textContent = randomPhrase;
        }
    }

/**
 * ARTICLE GENERATION
*/
const articleSection = document.getElementById("article-section");
if (articleSection) {
    
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
    }
});