import reactImg from "/public/assets/react.svg";
import javascriptImg from "/public/assets/javascript.svg";
import nodejsImg from "/public/assets/nodejs.svg";
import mongodbImg from "/public/assets/mongodb.svg";
import socketioImg from "/public/assets/socketio.svg";
import threejsImg from "/public/assets/threejs.png";
import cssImg from "/public/assets/css.svg";
import dialogflowImg from "/public/assets/dialogflow.svg";
import flaskImg from "/public/assets/flask.svg";
import godotImg from "/public/assets/godot.svg";
import html5Img from "/public/assets/html5.svg";
import materialuiImg from "/public/assets/materialui.svg";
import opencvImg from "/public/assets/opencv.svg";
import pygameImg from "/public/assets/pygame.png";
import pythonImg from "/public/assets/python.svg";
import webpackImg from "/public/assets/webpack.svg";
import postgresqlImg from "/public/assets/postgresql.png";
import angularImg from "/public/assets/angular.svg";
import phpImg from "/public/assets/php.svg";
import mysqlImg from "/public/assets/mysql.svg";
import rabbitMqImg from "/public/assets/rabbitmq.svg";
import cppImg from "/public/assets/cplusplus.svg";
import goImg from "/public/assets/go.svg";
import sqliteImg from "/public/assets/sqlite.svg";
import typescriptImg from "/public/assets/typescript.svg";
import { Image } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

interface TechLogoProps {
  name: TechLogoType;
  maxHeight?: string;
}

export enum TechLogoType {
  React = "React",
  Javascript = "Javascript",
  NodeJS = "NodeJS",
  MongoDB = "MongoDB",
  ThreeJS = "ThreeJS",
  SocketIO = "Socket.IO",
  Css = "CSS",
  DialogueFlow = "DialogueFlow",
  Flask = "Flask",
  Godot = "Godot",
  HTML = "HTML",
  MaterialUI = "Material UI",
  OpenCV = "OpenCV",
  PyGame = "PyGame",
  Python = "Python",
  Webpack = "Webpack",
  Postgresql = "Postgresql",
  Angular = "Angular",
  Php = "Php",
  MySql = "MySql",
  RabbitMQ = "RabbitMQ",
  CPlusPlus = "cpp",
  Go = "go",
  Sqlite = "sqlite",
  Typescript = "typescript",
}

export const TechLogo = ({ name, maxHeight }: TechLogoProps) => {
  const getSrc = (): StaticImageData => {
    switch (name) {
      case TechLogoType.React:
        return reactImg;
      case TechLogoType.Javascript:
        return javascriptImg;
      case TechLogoType.NodeJS:
        return nodejsImg;
      case TechLogoType.MongoDB:
        return mongodbImg;
      case TechLogoType.ThreeJS:
        return threejsImg;
      case TechLogoType.SocketIO:
        return socketioImg;
      case TechLogoType.Css:
        return cssImg;
      case TechLogoType.DialogueFlow:
        return dialogflowImg;
      case TechLogoType.Flask:
        return flaskImg;
      case TechLogoType.Godot:
        return godotImg;
      case TechLogoType.HTML:
        return html5Img;
      case TechLogoType.MaterialUI:
        return materialuiImg;
      case TechLogoType.OpenCV:
        return opencvImg;
      case TechLogoType.PyGame:
        return pygameImg;
      case TechLogoType.Python:
        return pythonImg;
      case TechLogoType.Webpack:
        return webpackImg;
      case TechLogoType.Postgresql:
        return postgresqlImg;
      case TechLogoType.Angular:
        return angularImg;
      case TechLogoType.Php:
        return phpImg;
      case TechLogoType.MySql:
        return mysqlImg;
      case TechLogoType.RabbitMQ:
        return rabbitMqImg;
      case TechLogoType.CPlusPlus:
        return cppImg;
      case TechLogoType.Go:
        return goImg;
      case TechLogoType.Sqlite:
        return sqliteImg;
      case TechLogoType.Typescript:
        return typescriptImg;
      default:
        throw new Error(`unsupported logo type: ${name}`);
    }
  };
  const src = getSrc();
  if (src === null) {
    return null;
  }
  return (
    <Image
      height={maxHeight}
      src={src.src}
      alt={name}
      padding={1}
      objectFit={"contain"}
    />
  );
};
