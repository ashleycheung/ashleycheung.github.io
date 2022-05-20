import flowFormsImg from './assets/flowForms.png';
import stockOverflowImg from './assets/stockOverflow.png';
import doggoRunImg from './assets/doggoRun.png';
import virtualQueueImg from './assets/virtualQueue.png';
import spaceShooterImg from './assets/spaceShooter.png';
import ashleyBotImg from './assets/ashleyBot.png';
import battleRoomImg from './assets/battleroom.png';
import hymnFinderImg from './assets/hymnFinder.png';
import diepioImg from './assets/diepio.gif';
import hystatsImg from './assets/hystats.png';
import tetrisImg from './assets/tetris.gif';
import hangmanioImg from './assets/hangmanio.png';
import anzscoImg from './assets/anzsco.png';


export type Project = {
  title: string;
  desc: string;
  thumbnailSrc: string;
  projectSrc: string;
  technologies: Array<string>
}

export type PortfolioProjects = {
  featuredProjects: Array<Project>;
  projects: Array<Project>;
}

export const PROJECTDATA: PortfolioProjects = {
  "featuredProjects" : [
    {
      "title" : "Flow Forms",
      "desc" : `A node based form application to create forms with complex flow chart logic.
      `,
      "thumbnailSrc" : flowFormsImg,
      "projectSrc" : "https://ashleycheung.github.io/flow-forms/",
      "technologies" : [
        "React",
        "Javascript"
      ]
    },
    {
      "title" : "Stock Overflow",
      "desc" : `A stocks portfolio web app. A University Capstone project.
      `,
      "thumbnailSrc" : stockOverflowImg,
      "projectSrc" : "https://stock-overflow-frontend.vercel.app/",
      "technologies" : [
        "React",
        "Javascript",
        "NodeJS",
        "MongoDB"
      ]
    },
    {
      "title" : "Doggo Run",
      "desc" : `A web browser game made for mobile.
      `,
      "thumbnailSrc" : doggoRunImg,
      "projectSrc" : "https://doggo-run.vercel.app/",
      "technologies" : [
        "Javascript",
        "ThreeJS",
        "Webpack"
      ]
    },
    {
      "title" : "Virtual Queue",
      "desc" : `A real-time virtual queue application built using the Socket.io library.
      `,
      "thumbnailSrc" : virtualQueueImg,
      "projectSrc" : "https://ashleycheung.github.io/virtual-queue/",
      "technologies" : [
        "React",
        "Javascript",
        "NodeJS",
        "Socket.IO"
      ]
    }
  ],
  "projects": [
    {
      "title" : "Space Shooter",
      "desc" : "A web-based real time multiplayer shooting game",
      "thumbnailSrc" : spaceShooterImg,
      "projectSrc" : "http://space-shooter-io.herokuapp.com/",
      "technologies" : [
        "Javascript",
        "NodeJS",
        "Socket.IO",
        "Webpack"
      ]
    },
    {
      "title" : "Visa Searcher",
      "desc" : "An Australian Visa searcher based on occupation. Data is scraped daily from government website",
      "thumbnailSrc" : anzscoImg,
      "projectSrc" : "https://anzsco-webapp.vercel.app/",
      "technologies" : [
        "NodeJS",
        "React",
        "Postgresql"
      ]
    },
    {
      "title" : "Ashley Bot",
      "desc" : "A chatbot that uses google's dialogflow API.",
      "thumbnailSrc" : ashleyBotImg,
      "projectSrc" : "https://ashleycheung.github.io/AshleyBot/",
      "technologies" : [
        "Python",
        "Flask",
        "React",
        "Javascript",
        "DialogueFlow"
      ]
    },
    {
      "title" : "Battle Room",
      "desc" : "A dungeon crawler with procedural map generation utilising the Godot Game Engine",
      "thumbnailSrc" : battleRoomImg,
      "projectSrc" : "https://ashleycheung.itch.io/battleroom",
      "technologies" : [
        "Godot"
      ]
    },
    {
      "title" : "Hymn Finder",
      "desc" : "A web application that searches for hymns given a specific bible verse. It utilises React and the hymnary API.",
      "thumbnailSrc" : hymnFinderImg,
      "projectSrc" : "https://ashleycheung.github.io/hymnfinder/",
      "technologies" : [
        "React",
        "Javascript",
        "CSS",
        "HTML"
      ]
    },
    {
      "title" : "Diep.io Bot",
      "desc" : "A bot that uses computer vision to play the game Diep.io. It utilises Python and OpenCV.",
      "thumbnailSrc" : diepioImg,
      "projectSrc" : "https://github.com/ashleycheung/DiepIO-Bot",
      "technologies" : [
        "Python",
        "OpenCV"
      ]
    },
    {
      "title" : "HyStats",
      "desc" : "A web application to view statistics from Minecraft Hypixel",
      "thumbnailSrc" : hystatsImg,
      "projectSrc" : "https://github.com/ashleycheung/Hystats/",
      "technologies" : [
        "React",
        "Javascript"
      ]
    },
    {
      "title" : "Tetris",
      "desc" : "A clone of the popular game Tetris, using the Python Library Pygame.",
      "thumbnailSrc" : tetrisImg,
      "projectSrc" : "https://github.com/ashleycheung/Tetris-Clone",
      "technologies" : [
        "Python",
        "PyGame"
      ]
    },
    {
      "title" : "Hangman-io",
      "desc" : "An online multiplayer hangman game",
      "thumbnailSrc" : hangmanioImg,
      "projectSrc" : "https://hangman-io.vercel.app/",
      "technologies" : [
        "NodeJS",
        "React",
        "Socket.IO"
      ]
    }
  ]
}