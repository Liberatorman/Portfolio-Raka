import React from 'react';
import styles from './ProjectsStyles.module.css';
import KrisisKuat from '../../assets/Krisis Kuat.png';
import ProjectCard from '../../common/ProjectCard';
import LuckyFutsal from '../../assets/Lucky Futsal.png'
import SimplePortfolio from '../../assets/Simple Portfolio with HTML + CSS.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            < ProjectCard
            src={KrisisKuat}
            link={'https://www.figma.com/proto/oMxjq5vODQhttJnvTgLfGH/Krisis-Kuat?page-id=0%3A1&node-id=17-142&viewport=-1867%2C167%2C0.27&t=VmwFJYugEXGFOmTI-1&scaling=min-zoom&starting-point-node-id=17%3A142&show-proto-sidebar=1'} 
            h3="Krisis Kuat" 
            p="Prototype of a Natural Disaster Website Dedicated to Earthquake Alerts and Historical Data. I create this as one of my project in Infinite Learning UI/UX Design & Web Development Class using Figma"
            />
            < ProjectCard
            src={LuckyFutsal}
            link={'https://www.figma.com/proto/n92xIByrsjXPyiXFLcKGyw/Figma-Design-%26-Prototype-(Lucky-Futsal)?page-id=11%3A1070&node-id=76-399&viewport=518%2C478%2C0.06&t=tI2Ges4c2JsgOgAb-1&scaling=min-zoom&starting-point-node-id=76%3A399'} 
            h3="Lucky Futsal" 
            p="This Futsal Website Prototype facilitates field rental bookings, connects users with sparring teams, and provides comprehensive Futsal information. Developed with my team during the Infinite Learning UI/UX Design & Web Development course, we used Figma to bring this project to life."
            />
            < ProjectCard
            src={SimplePortfolio}
            link={'https://github.com/Liberatorman/Web-Development'} 
            h3="Raka Simple Portfolio" 
            p="A simple portfolio as one of my project in Infinite Learning UI/UX Design & Web Development Class that i create using HTML and CSS"
            />
        </div>
        </section>
  )
}

export default Projects