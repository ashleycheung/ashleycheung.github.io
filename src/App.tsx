import { Parallax } from "@react-spring/parallax";
import styles from './App.module.css'
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { getRootProperty, hexToRGB } from "./helpers";
import { AboutMe } from "./AboutMe";
import { Landing } from "./Landing";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { useRef } from "react";
import { Contact } from "./Contact";
import 'react-lazy-load-image-component/src/effects/opacity.css';


function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: hexToRGB(getRootProperty('--primary'), 1),
      },
      secondary: {
        main: hexToRGB(getRootProperty('--secondary'), 1),
      },
    },
  });
  
  const parallaxRef = useRef(null);
  
  const scrollTo = (offset: number) => {
    (parallaxRef.current as any)?.scrollTo(offset);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Parallax
          ref={parallaxRef}
          pages={6.5}
        >
          <Landing scrollTo={scrollTo} offset={0}/>
          <AboutMe offset={1}/>
          <Education offset={2}/>
          <Projects offset={3}/>
          <Contact offset={5.5}/>
        </Parallax>
      </div>
    </ThemeProvider>
  );
}

export default App;
