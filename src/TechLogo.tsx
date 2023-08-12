import reactImg from "./assets/react.svg";
import javascriptImg from "./assets/javascript.svg";
import nodejsImg from "./assets/nodejs.svg";
import mongodbImg from "./assets/mongodb.svg";
import socketioImg from "./assets/socketio.svg";
import threejsImg from "./assets/threejs.png";
import cssImg from "./assets/css.svg";
import dialogflowImg from "./assets/dialogflow.svg";
import flaskImg from "./assets/flask.svg";
import godotImg from "./assets/godot.svg";
import html5Img from "./assets/html5.svg";
import materialuiImg from "./assets/materialui.svg";
import opencvImg from "./assets/opencv.svg";
import pygameImg from "./assets/pygame.png";
import pythonImg from "./assets/python.svg";
import webpackImg from "./assets/webpack.svg";
import postgresqlImg from "./assets/postgresql.svg";
import angularImg from "./assets/angular.svg";
import phpImg from "./assets/php.svg";
import mysqlImg from "./assets/mysql.svg";
import rabbitMqImg from "./assets/rabbitmq.svg";
import cppImg from "./assets/cplusplus.svg";
import goImg from "./assets/go.svg";
import sqliteImg from "./assets/sqlite.svg";
import typescriptImg from "./assets/typescript.svg";
import { Box } from "@chakra-ui/react";

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
  const getSrc = () => {
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
    <Box display={"flex"} height={maxHeight ?? "50px"} margin={2}>
      <img height={"100%"} src={src} alt={name} />
    </Box>
  );
};
