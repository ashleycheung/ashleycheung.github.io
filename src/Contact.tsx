import { ParallaxLayer } from "@react-spring/parallax"
import styles from './Contact.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
import { FaCross } from "react-icons/fa";

type ContactProps = {
  offset: number
}

export const Contact = ({ offset }: ContactProps) => {
  
  const navigate = (link: string) => window.open(link, '_blank')?.focus();
  
  return (
    <ParallaxLayer
      offset={offset}
    >
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Want to get in touch?
        </h1>
        <h2 className={styles.email}>
          ashleycheung2412@gmail.com
        </h2>
        <div className={styles.socials}>
          <IconButton
            onClick={() => navigate('https://www.instagram.com/ashley_cheung24/')}
          >
            <InstagramIcon 
              className={styles.socialBtn}
              fontSize="large"
            />
          </IconButton>
          
          <IconButton
            onClick={() => navigate('https://www.linkedin.com/in/ashley-cheung-209698177/')}
          >
            <LinkedInIcon 
              className={styles.socialBtn}
              fontSize="large"
            />
          </IconButton>
          
          <IconButton
            onClick={() => navigate('https://github.com/ashleycheung')}
          >
            <GitHubIcon 
              className={styles.socialBtn}
              fontSize="large"
            />
          </IconButton>
        </div>
        <div className={styles.bibleVerseWrapper}>
          <FaCross className={styles.cross}/>
          <h2 className={styles.bibleVerse}>
            To Christ be the Glory
          </h2>
        </div>
        <div className={styles.version}>
          Version 1.0.2
        </div>
      </div>
    </ParallaxLayer>
  )
}
