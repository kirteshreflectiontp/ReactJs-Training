import React from 'react';
import styles from './Project.module.css';
import Tech from '../../techStack/TechStack';
import Fade from 'react-reveal/Fade';

function Project({ data }) {

    return (
        <div className={styles.container}>
            {data.map((el, i) => (
                <div className={styles.dataWrapper} key={i}>
                    <Fade duration={2000}>
                        <Fade left cascade duration={2000}> <h1>{el.title}</h1></Fade>
                        <h3>{el.Description}</h3>
                        <div className={styles.techWrapper}>
                            <Tech skills={el.tech} font="small"></Tech>
                        </div>
                        <div className={styles.linkBtns}>
                            <a href={el.links.visit} className={styles.lnk} target="_blank" rel="noopener noreferrer">Visit</a>
                            <a href={el.links.code} className={styles.lnk} target="_blank" rel="noopener noreferrer">Code</a>
                            

                        </div>

                    </Fade>
                </div>
            ))
            }
        </div>
    )
}

export default Project
