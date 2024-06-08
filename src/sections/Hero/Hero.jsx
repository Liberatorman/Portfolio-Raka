import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Raka.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Muhammad Raka Nugraha-resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of Raka Nugraha" 
        />
        <img 
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Muhammad <br /> Raka Nugraha</h1>
        <h2>UI/UX Designer & Web Developer</h2>
        <span>
          <a href="https://www.instagram.com/rakanugraha_88/" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
          </a>
            <a href="https://github.com/Liberatorman" target="_blank">
              <img src={githubIcon} alt="Github icon" />
          </a>
            <a href="https://www.linkedin.com/in/muhammad-raka-nugraha/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Experienced designer with a passion for creating and developing cutting-edge, responsive web applications.
        </p>
        <a href={CV} download>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero  