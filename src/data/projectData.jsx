import catCrawlerDesktop from '../images/cat-crawler-desktop.png'
import pokemap from '../images/pokemap-desktop.png'
import totemize from '../images/totemize-mobile.png'
import pixelRunner from '../images/pixel-runner-desktop.png'
import gameOfLife from '../images/game-of-life-desktop.png'
import restoic from '../images/restoic-app.png'

export const projectData = [
   {
      source: catCrawlerDesktop,
      alt: "cat-crawler",
      header: "Cat Crawler",
      about: "Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.",
      skills: "Canvas, JavaScript, CSS",
      links: [
         {
            link: "https://terryszhou.github.io/cat-crawler/",
            linkText: "Live Site | "
         },
         {
            link: "https://github.com/terryszhou/cat-crawler/",
            linkText: "Github Repo"
         },
      ]
   },
   {
      source: pokemap,
      alt: "pokemap",
      header: "PokéMap",
      about: "Full stack app combining a functioning Pokédex with a map of the Kanto region.",
      skills: "Express, React, Axios, PostgreSQL, Sequelize",
      links: [
         {
            link: "https://pokemap-kanto.herokuapp.com/",
            linkText: "Live Site | "
         },
         {
            link: "https://github.com/terryszhou/PokeMap/",
            linkText: "Github Repo"
         },
      ]
   },
   {
      source: totemize,
      alt: "totemize",
      header: "Totemize",
      about: "Full stack MERN app that lets users login, create events, and find friends at a festival.",
      skills: "Express, React, Axios, MongoDB, JWT",
      links: [
         {
            link: "https://friendly-sinoussi-f96db3.netlify.app/",
            linkText: "Live Site | "
         },
         {
            link: "https://github.com/terryszhou/MERN-Auth-Server/",
            linkText: "Backend | "
         },
         {
            link: "https://github.com/terryszhou/P3-auth-client/",
            linkText: "Frontend"
         },
      ]
   },
   {
      source: pixelRunner,
      alt: "pixel-runner",
      header: "Pixel Runner",
      about: "One-day sprint based on Pygame tutorial. Improved with full arrow key movement, scrolling backgrounds, and various bug fixes.",
      skills: "Python, Pygame",
      links: [
         {
            link: "https://github.com/terryszhou/pixel-runner/",
            linkText: "Github Repo"
         },
      ]
   },
   {
      source: gameOfLife,
      alt: "game-of-life",
      header: "Python of Life",
      about: "Three-day sprint based on Conway's Game of Life. Features four separate rulesets and built-in object creation tools.",
      skills: "Python, Pygame",
      links: [
         {
            link: "https://github.com/terryszhou/p4-python-of-life/",
            linkText: "Github Repo"
         },
      ]
   },
   {
      source: restoic,
      alt: "restoic",
      header: "Restoic",
      about: "Health & fitness mobile app developed with an Austin-based startup team.",
      skills: "React Native, XCode, Android Studio",
      links: [
         {
            link: "https://apps.apple.com/tt/app/restoic-performance-mindset/id1557936632",
            linkText: "App Store | "
         },
         {
            link: "https://play.google.com/store/apps/details?id=com.restoic&hl=en_US&gl=US",
            linkText: "Google Play"
         },
      ]
   },
];
