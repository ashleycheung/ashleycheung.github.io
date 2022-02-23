import { AboutMe } from "./aboutMe";
import { Header } from "./header";
import { setMobileFullScreen } from "./helper";
import { LandingPage } from "./landing";
import { createLazyLoad } from "./loader";
import { Projects } from "./project";

setMobileFullScreen();

document.addEventListener('DOMContentLoaded', createLazyLoad, { once: true });

const root = document.body;

const header = new Header();
header.attach(root);

const landing = new LandingPage();
landing.attach(root)


const aboutMe = new AboutMe();
aboutMe.attach(root);

const projects = new Projects();
projects.attach(root);
