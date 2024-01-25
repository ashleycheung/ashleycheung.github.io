import { TechLogoType } from "./TechLogo";
import flowFormsImg from "./assets/flowForms.png";
import stockOverflowImg from "./assets/stockOverflow.png";
import doggoRunImg from "./assets/doggoRun.png";
import virtualQueueImg from "./assets/virtualQueue.png";
import spaceShooterImg from "./assets/spaceShooter.png";
import ashleyBotImg from "./assets/ashleyBot.png";
import battleRoomImg from "./assets/battleroom.png";
import hymnFinderImg from "./assets/hymnFinder.png";
import diepioImg from "./assets/diepio.gif";
import hystatsImg from "./assets/hystats.png";
import tetrisImg from "./assets/tetris.gif";
import hangmanioImg from "./assets/hangmanio.png";
import anzscoImg from "./assets/anzsco.png";
import goShooterImg from "./assets/go-shooter.png";
import arcadianRealmsImg from "./assets/arcadian-realms.png";
import tribeHuntImg from "./assets/tribeHunt.png";
import tribeGameshowImg from "./assets/tribe-gameshow.png";
import tribeCampImg from "./assets/tribe-camp.png";
import realmforgeImg from "./assets/realmforge.png";

export type Project = {
  title: string;
  desc: string;
  thumbnailSrc: string;
  projectSrc: string;
  technologies: Array<TechLogoType>;
};

export type PortfolioProjects = {
  featuredProject: Project;
  projects: Array<Project>;
};

export const PROJECTDATA: PortfolioProjects = {
  featuredProject: {
    title: "Realmforge 3D Editor",
    desc: `A browser based 3D editor for creating stunning worlds.
      `,
    thumbnailSrc: realmforgeImg,
    projectSrc: "https://realmforge.vercel.app/",
    technologies: [
      TechLogoType.Typescript,
      TechLogoType.ThreeJS,
      TechLogoType.React,
    ],
  },

  projects: [
    {
      title: "Doggo Run",
      desc: `A web browser game made for mobile.
      `,
      thumbnailSrc: doggoRunImg,
      projectSrc: "https://doggo-run.vercel.app/",
      technologies: [
        TechLogoType.Javascript,
        TechLogoType.ThreeJS,
        TechLogoType.Webpack,
      ],
    },
    {
      title: "Go Shooter",
      desc: `A free for all multiplayer shooting game in the browser!.
      `,
      thumbnailSrc: goShooterImg,
      projectSrc: "https://go-shooter.fly.dev/",
      technologies: [TechLogoType.Typescript, TechLogoType.Go],
    },
    {
      title: "Arcadian Realms",
      desc: `A MMORPG that works in your browser!.
      `,
      thumbnailSrc: arcadianRealmsImg,
      projectSrc: "https://arcadianrealms.vercel.app/",
      technologies: [
        TechLogoType.Typescript,
        TechLogoType.Sqlite,
        TechLogoType.SocketIO,
        TechLogoType.React,
      ],
    },
    {
      title: "TribeHunt",
      desc: `A real time scavenger hunt app.
      `,
      thumbnailSrc: tribeHuntImg,
      projectSrc: "https://tribehunt.vercel.app/",
      technologies: [
        TechLogoType.Typescript,
        TechLogoType.Postgresql,
        TechLogoType.SocketIO,
        TechLogoType.React,
      ],
    },
    {
      title: "Virtual Queue",
      desc: `A real-time virtual queue application built using the Socket.io library.
      `,
      thumbnailSrc: virtualQueueImg,
      projectSrc: "https://ashleycheung.github.io/virtual-queue/",
      technologies: [
        TechLogoType.React,
        TechLogoType.Javascript,
        TechLogoType.NodeJS,
        TechLogoType.SocketIO,
      ],
    },
    {
      title: "Tetris",
      desc: "A clone of the popular game Tetris, using the Python Library Pygame.",
      thumbnailSrc: tetrisImg,
      projectSrc: "https://github.com/ashleycheung/Tetris-Clone",
      technologies: [TechLogoType.Python, TechLogoType.PyGame],
    },
    {
      title: "Diep.io Bot",
      desc: "A bot that uses computer vision to play the game Diep.io. It utilises Python and OpenCV.",
      thumbnailSrc: diepioImg,
      projectSrc: "https://github.com/ashleycheung/DiepIO-Bot",
      technologies: [TechLogoType.Python, TechLogoType.OpenCV],
    },
    {
      title: "Stock Overflow",
      desc: `A stocks portfolio web app. A University Capstone project.
      `,
      thumbnailSrc: stockOverflowImg,
      projectSrc: "https://stock-overflow-frontend.vercel.app/",
      technologies: [
        TechLogoType.React,
        TechLogoType.Javascript,
        TechLogoType.NodeJS,
        TechLogoType.MongoDB,
      ],
    },
    {
      title: "Tribe Youth App",
      desc: `A points tracking app I made for my youth group's camp`,
      thumbnailSrc: tribeCampImg,
      projectSrc: "https://tribeyouth.vercel.app/",
      technologies: [
        TechLogoType.Typescript,
        TechLogoType.React,
        TechLogoType.MongoDB,
      ],
    },
    {
      title: "Space Shooter",
      desc: "A web-based real time multiplayer shooting game",
      thumbnailSrc: spaceShooterImg,
      projectSrc: "https://space-shooter-pkia.onrender.com/",
      technologies: [
        TechLogoType.Javascript,
        TechLogoType.NodeJS,
        TechLogoType.SocketIO,
        TechLogoType.Webpack,
      ],
    },
    {
      title: "Ashley Bot",
      desc: "A chatbot that uses google's dialogflow API.",
      thumbnailSrc: ashleyBotImg,
      projectSrc: "https://ashleycheung.github.io/AshleyBot/",
      technologies: [
        TechLogoType.Python,
        TechLogoType.Flask,
        TechLogoType.React,
        TechLogoType.Javascript,
        TechLogoType.DialogueFlow,
      ],
    },
    {
      title: "Visa Searcher",
      desc: "An Australian Visa searcher based on occupation. Data is scraped daily from government website",
      thumbnailSrc: anzscoImg,
      projectSrc: "https://anzsco-webapp.vercel.app/",
      technologies: [
        TechLogoType.NodeJS,
        TechLogoType.React,
        TechLogoType.Postgresql,
      ],
    },
    {
      title: "Battle Room",
      desc: "A dungeon crawler with procedural map generation utilising the Godot Game Engine",
      thumbnailSrc: battleRoomImg,
      projectSrc: "https://ashleycheung.itch.io/battleroom",
      technologies: [TechLogoType.Godot],
    },
    {
      title: "Hymn Finder",
      desc: "A web application that searches for hymns given a specific bible verse. It utilises React and the hymnary API.",
      thumbnailSrc: hymnFinderImg,
      projectSrc: "https://ashleycheung.github.io/hymnfinder/",
      technologies: [
        TechLogoType.React,
        TechLogoType.Javascript,
        TechLogoType.Css,
        TechLogoType.HTML,
      ],
    },
    {
      title: "Tribe Game Show",
      desc: `A webbased app that makes it easy for you to host your own timed gameshows!`,
      thumbnailSrc: tribeGameshowImg,
      projectSrc: "https://tribe-question-time.vercel.app/",
      technologies: [TechLogoType.Typescript, TechLogoType.React],
    },
    {
      title: "HyStats",
      desc: "A web application to view statistics from Minecraft Hypixel",
      thumbnailSrc: hystatsImg,
      projectSrc: "https://github.com/ashleycheung/Hystats/",
      technologies: [TechLogoType.React, TechLogoType.Javascript],
    },
    {
      title: "Flow Forms",
      desc: `A node based form application to create forms with complex flow chart logic.
      `,
      thumbnailSrc: flowFormsImg,
      projectSrc: "https://ashleycheung.github.io/flow-forms/",
      technologies: [TechLogoType.React, TechLogoType.Javascript],
    },
    {
      title: "Hangman-io",
      desc: "An online multiplayer hangman game",
      thumbnailSrc: hangmanioImg,
      projectSrc: "https://hangman-io.vercel.app/",
      technologies: [
        TechLogoType.NodeJS,
        TechLogoType.React,
        TechLogoType.SocketIO,
      ],
    },
  ],
};
