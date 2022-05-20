import { ParallaxLayer } from "@react-spring/parallax";
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './AboutMe.module.css'
import dp from './assets/dp.jpg';


type AboutMeProps = {
  offset: number
}


export const AboutMe = ({ offset }: AboutMeProps) => {
  return (
    <ParallaxLayer
      offset={offset}
    >
      <div className={styles.aboutMeWrapper}>
        <h1>
          About Me
        </h1>
        <LazyLoadImage
          className={styles.aboutMeImg}
          src = {dp}
          alt = "Ashley Cheung"
        />
        <p className={styles.aboutMeText}>
          I am an aspiring engineer, and currently a student at UNSW studying mechatronics engineering and computer science. In my spare time, I love to tinker around with code and make fun projects! In my downtimes, I love to go for runs and cycle at the park!
        </p>
      </div>
    </ParallaxLayer>
  )
}