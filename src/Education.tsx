import { ParallaxLayer } from "@react-spring/parallax"
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './Education.module.css';
import baulko from './assets/baulko.png';
import unsw from './assets/unsw.jpg';

type EducationProps = {
  offset: number
}

export const Education = ({ offset }: EducationProps) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={0.5}
      className={styles.parallax}
    >
      <div className={styles.wrapper}>
        <h1 className={styles.pageTitle}>
          Education
        </h1>
        <div className={styles.schoolList}>
          <div className={styles.school}>
            <LazyLoadImage
              className={styles.schoolImg}
              src={unsw}
              alt="UNSW"
              effect="opacity"
            />
            <div className={styles.schoolContent}>
              <h2 className={styles.schoolTitle}>
                University of New South Wales (UNSW)
              </h2>
              <div className={styles.date}>
                2019 - Now
              </div>
              <ul className={styles.list}>
                <li className={styles.listElem}>
                  Engineering (Mechatronics) / Computer Science
                </li>
                <li className={styles.listElem}>
                  Included in 2020 & 2021 UNSW Dean's Honour's list
                </li>
                <li className={styles.listElem}>
                  Distinction Average WAM
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.school}>
            <LazyLoadImage
              className={styles.schoolImg}
              src={baulko}
              alt="Baulkham Hills Highschool"
            />
            <div className={styles.schoolContent}>
              <h2 className={styles.schoolTitle}>
                Baulkham Hills Highschool
              </h2>
              <div className={styles.date}>
                2017 - 2018
              </div>
              <ul className={styles.list}>
                <li className={styles.listElem}>
                  Graduated with an ATAR of 98.95
                </li>
                <li className={styles.listElem}>
                  Distinguished achiever in Mathematics Extension 1 & 2, Physics, English (Advanced)
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </ParallaxLayer>
  )
}
