import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
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
          <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
          </a>
            <a href="https://github.com/" target="_blank">
              <img src={githubIcon} alt="Github icon" />
          </a>
            <a href="https://linkedin.com/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
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