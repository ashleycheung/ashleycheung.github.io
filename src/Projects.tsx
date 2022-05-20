import { ParallaxLayer } from "@react-spring/parallax"
import styles from './Projects.module.css';
import { Project, PROJECTDATA } from "./projectdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import React, { useState } from "react";
import reactImg from './assets/react.svg';
import javascriptImg from './assets/javascript.svg';
import nodejsImg from './assets/nodejs.svg';
import mongodbImg from './assets/mongodb.svg';
import socketioImg from './assets/socketio.svg';
import threejsImg from './assets/threejs.png';
import cssImg from './assets/css.svg';
import dialogflowImg from './assets/dialogflow.svg';
import flaskImg from './assets/flask.svg';
import godotImg from './assets/godot.svg';
import html5Img from './assets/html5.svg';
import materialuiImg from './assets/materialui.svg';
import opencvImg from './assets/opencv.svg';
import pygameImg from './assets/pygame.png';
import pythonImg from './assets/python.svg';
import webpackImg from './assets/webpack.svg';
import postgresqlImg from './assets/postgresql.svg';


import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


type ProjectProps = {
  offset: number
}

export const Projects = ({ offset }: ProjectProps) => {
  
  const [ selectedProject, setSelectedProject ] = useState<string | null>(null)
  
  return (
    <React.Fragment>
      <ParallaxLayer
        offset={offset}
      >
        <div className={styles.wrapper}>
          <h1>Projects</h1>
          <Swiper
            className={styles.swiper}
            loop={true}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
          >
            {
              PROJECTDATA.featuredProjects.map(f => (
                <SwiperSlide 
                  key={f.title}
                  className={styles.swiperSlide}
                >
                  
                  <FeaturedProject data={f}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset + 1}
      >
        <div className={styles.otherProjectWrapper}>
          <h2>Other noteworthy projects</h2>
          {
            selectedProject === null ?
            (
              <div
                className={styles.otherProjectGrid}
              >
                {
                  PROJECTDATA.projects
                    .map(f => (
                      <OtherProject 
                        key={f.title}
                        data={f}
                        setSelectedProject={setSelectedProject}
                      />
                    ))
                }
              </div>
            ):
            (
              <SelectedProject
                setSelectedProject={setSelectedProject}
                data={
                  PROJECTDATA.projects.find(p => p.title === selectedProject)!
                }
              />
            )
          }
        </div>
      </ParallaxLayer>
    </React.Fragment>
  )
}

type SelectedProjectProps = {
  data: Project,
  setSelectedProject: (name: string | null) => void,
}

const SelectedProject = ({ data, setSelectedProject }: SelectedProjectProps) => {
  const onClose = () => setSelectedProject(null);
  const onClick = () => window.open(data.projectSrc, '_blank')?.focus();
  return (
    <div className={styles.selectedProject}>
      <div className={styles.selectedProjectBtnWrapper}>
        <IconButton 
          color="primary"
          onClick={onClose}
        >
          <CloseIcon/>
        </IconButton>
      </div>
      <h2 
        className={styles.selectedProjectTitle}
        onClick={onClick}
      >
        { data.title }
      </h2>
      <img
        className={styles.selectedProjectImg}
        src={data.thumbnailSrc}
        alt={data.title}
      />
      <p className={styles.selectedProjectText}>
        { data.desc }
      </p>
      <div
        className={styles.selectedProjectTechList}
      >
        { data.technologies.map(t => (
          <TechLogo key={t} name={t}/>
        )) }
      </div>
    </div>
  )
}


type OtherProjectProps = {
  data: Project,
  setSelectedProject: (name: string | null) => void,
}

const OtherProject = ({ 
  data, setSelectedProject
}: OtherProjectProps) => {
  
  const onClick = () => {
    setSelectedProject(data.title)
  }
  
  
  return (
    <div 
      onClick={onClick}
      className={styles.otherProject}
    >
      <img
        className={styles.otherProjectImg}
        src={data.thumbnailSrc}
        alt={data.title}
      />
      <div
        className={styles.otherProjectTitle}
      >
        { data.title }
      </div>
    </div>
  )
}


type FeaturedProjectProps = {
  data: Project
}

const FeaturedProject = ({ data }: FeaturedProjectProps) => {
  const onClick = () => window.open(data.projectSrc, '_blank')?.focus();
  return (
    <div className={styles.featuredProject}>
      <h2 
        className={styles.featuredProjectTitle}
        onClick={onClick}
      >
        { data.title }
      </h2>
      <img
        className={styles.featuredProjectImg}
        src={data.thumbnailSrc}
        alt={data.title}
      />
      <p className={styles.featuredProjectText}>
        { data.desc }
      </p>
      <div
        className={styles.featuredProjectTechList}
      >
        { data.technologies.map(t => (
          <TechLogo key={t} name={t}/>
        )) }
      </div>
    </div>
  )
}


type TechLogoProps = {
  name: string
}


const TechLogo = ({ name }: TechLogoProps) => {
  const getSrc = () => {
    switch (name) {
      case "React":
        return reactImg;
      case "Javascript":
        return javascriptImg;
      case "NodeJS":
        return nodejsImg;
      case "MongoDB":
        return mongodbImg;
      case "ThreeJS":
        return threejsImg;
      case "Socket.IO":
        return socketioImg;
      case "CSS":
        return cssImg;
      case "DialogueFlow":
        return dialogflowImg;
      case "Flask":
        return flaskImg;
      case "Godot":
        return godotImg;
      case "HTML":
        return html5Img;
      case "Material UI":
        return materialuiImg;
      case "OpenCV":
        return opencvImg;
      case "PyGame":
        return pygameImg;
      case "Python":
        return pythonImg;
      case "Webpack":
        return webpackImg;
      case "Postgresql":
        return postgresqlImg;
      default:
        return null;
    }
  }
  const src = getSrc();
  if (src === null) {
    return null;
  }
  return (
    <img 
      className={styles.featuredProjectTechLogo}
      src={src}
      alt={name}
    />
  )
}