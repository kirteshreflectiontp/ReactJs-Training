import React, { useRef, Suspense, memo } from 'react';
import styles from './About.module.css';
import TechStack from '../techStack/TechStack';
import CircleLoader from "react-spinners/CircleLoader";
import Fade from 'react-reveal/Fade';

function About({ handleClose }) {
    const paraRef = useRef(null)
    const skills = [ 'HTML','CSS', 'Javascript','ReactJS','NodeJS','PostgreSQL','TypeScript','Prisma','Java','SCSS','Bootstrap','Material UI','GitHub','Jira','Bitbucket','SDLC','DBMS','OOP','DSA']
    return (
        <div className={styles.aboutContainer} >
            <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
            <Suspense fallback={<CircleLoader size={150}
                color={"#123abc"}
                loading={true}></CircleLoader>}>
                <div className={styles.imgDiv}></div>
            </Suspense>
            <Fade duration={3000}>
                <div className={styles.para} ref={paraRef}>
                  A coding enthusiast passionate about learning Web development. I like myself to be surrounded by software developers. 
                   I am a full stack developer trainee, graduated B.E in Electrical Engineering in 2023 from Nagpur University  with willingness to learn new technologies.
                   Seeking leverage development and management skills with focus on  collaboration ,communication ,passion and creativity.
                  I am open for developer roles, in the field of Software Engineering. <br/>
                 You can reach out to me for any such opportunity at : kriteshgaikwad11@gmail.com
            </div>
            </Fade>
            <h1> Skills:</h1>
            <Fade duration={2000}>
                <div className={styles.skills}>
                    <TechStack skills={skills} font="big"></TechStack>
                </div>
            </Fade>
           
        </div>
    )
}

export default memo(About);