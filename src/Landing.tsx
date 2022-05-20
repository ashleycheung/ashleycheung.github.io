import { Button } from "@mui/material"
import { ParallaxLayer } from "@react-spring/parallax"
import React from "react"
import styles from './Landing.module.css';
import { ReactComponent as CoderSvg } from './assets/coder.svg';
import { ReactComponent as UiSvg } from './assets/ui.svg';
import { ReactComponent as HtmlSvg } from './assets/html.svg';
import { ReactComponent as WorldWebSvg } from './assets/worldweb.svg';

type LandingProps = {
  offset: number,
  scrollTo: (page: number) => void
}

export const Landing = ({ offset, scrollTo }: LandingProps) => {
  return (
    <React.Fragment>
      <ParallaxLayer 
        offset={offset}
        speed={0.5}
        style={{ textAlign: 'center' }}
      >
        <CoderSvg
          className={styles.coderSvg}
        />
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={offset}
        speed={1.5}
      >
        <WorldWebSvg
          className={styles.worldWebSvg}
        />
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={offset}
        speed={1}
      >
        <HtmlSvg
          className={styles.htmlSvg}
        />
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={offset}
        speed={2}
      >
        <UiSvg
          className={styles.uiSvg}
        />
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={offset}
        style={{ textAlign: 'center' }}
      >
        <div className={styles.landingTextWrapper}>
          <h1 className={styles.h1}>
            Ashley Cheung
          </h1>
          <h2 className={styles.h2}>
            Software and Mechatronics Engineer
          </h2>
          <Button
            onClick={() => scrollTo(3)}
            variant="contained"
            className={styles.button}
          >
            View Projects
          </Button>
        </div>
      </ParallaxLayer>
    </React.Fragment>
  )
}