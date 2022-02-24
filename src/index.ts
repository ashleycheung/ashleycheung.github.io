import { AboutMe } from "./aboutMe";
import { ContactMe } from "./contactMe";
import { Education } from "./education";
import { Footer } from "./footer";
import { Header } from "./header";
import { setMobileFullScreen } from "./helper";
import { LandingPage } from "./landing";
import { createLazyLoad } from "./loader";
import { LoadingScreen } from "./loadingScreen";
import { Projects } from "./project";

setMobileFullScreen();

document.addEventListener('DOMContentLoaded', createLazyLoad, { once: true });

const root = document.body;

const loading = new LoadingScreen();
loading.attach(root);

const header = new Header();
header.attach(root);

const landing = new LandingPage();
landing.attach(root)

const aboutMe = new AboutMe();
aboutMe.attach(root);

const education = new Education();
education.attach(root);

const projects = new Projects();
projects.attach(root);

const contactMe = new ContactMe();
contactMe.attach(root);

const footer = new Footer();
footer.attach(root);