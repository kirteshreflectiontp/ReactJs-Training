import React, { memo } from 'react';
import  styles from './TechStack.module.css';

function techStack({ skills, font }) {


    return (
        <div className={styles.container}>
            {skills.map((skill, i) => <h3 key={i} id={(font === "big") ? styles.big : styles.small}>{skill}</h3>)}
        </div>
    )
}

export default memo(techStack)