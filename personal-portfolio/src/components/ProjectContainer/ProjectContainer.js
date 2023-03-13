import React, { useState } from 'react';
import styles from  './ProjectContainer.module.css';
import Project from './Project/Project';
import data from './assests/mainProjects.json';
import data2 from './assests/miniProjects.json';
import Fade from 'react-reveal/Fade';

function ProjectContainer({ handleClose }) {
    const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
        if (activeTab === tab) {
            setActiveTab('0');
        }

    }

    return (
        <Fade>
            <div className={styles.Container}>
                <div className={styles.topbar}>
                    <h1>Projects</h1>
                    <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>

                </div>
                {(activeTab === '0') &&
                    (<div id={(activeTab === '0' ? styles.active : '')} className={styles.content}>
                        <Project data={data.projects}></Project>
                    </div>)}

                {(activeTab === '1') &&
                    <div id={(activeTab === '1' ? styles.active : '')} className={styles.content}>
                        <Project data={data2.projects}></Project>
                    </div>}

                <div className={styles.navButtons}>
                    <button onClick={() => toggle('0')} id={(activeTab === '0' ? styles.activeBtn : '')} >Projects</button>
                    <button onClick={() => toggle('1')} id={(activeTab === '1' ? styles.activeBtn : '')}>mini Projects</button>

                </div>
            </div>
        </Fade>

    )
}

export default ProjectContainer