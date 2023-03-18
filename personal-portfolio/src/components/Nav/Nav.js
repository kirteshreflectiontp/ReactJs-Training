import { useState, memo } from 'react';
import React from 'react';
import styles from './Nav.module.css';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Fade from 'react-reveal/Fade';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import myPDF from './Kirtesh.pdf'
function Nav() {
    const [activeTab, setActiveTab] = useState('0');
    const [hideNav, setHideNav] = useState(false)


    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            setHideNav(true)
        }
        if (activeTab === tab) {
            setActiveTab('0');
            setHideNav(false)
        }

    }
    const handleClose = (e) => {
        if (e) {
            setActiveTab('0')
            setHideNav(false)
        }
    }


    return (
        <Fade duration={2000}>
            <div className={styles.navContainer}>
                {(activeTab === '0') && <div id={(activeTab === '0' ? styles.active : '')} className={styles.content}>
                    <Intro></Intro>
                </div>}

                {(activeTab === '1') &&
                    <div id={(activeTab === '1' ? styles.active : '')} className={styles.content}>
                        <About handleClose={handleClose}></About>
                    </div>}
                {(activeTab === '2') &&
                    <div id={(activeTab === '2' ? styles.active : '')} className={styles.content}>
                        <ProjectContainer handleClose={handleClose}></ProjectContainer>
                    </div>}

                {(activeTab === '3') &&
                    <div id={(activeTab === '3' ? styles.active : '')} className={styles.content}>
                        <Contact handleClose={handleClose}></Contact>
                    </div>}
                <div className={`${styles.navButtons} ${hideNav ? styles.hide : ''}`}>
                    <button onClick={() => { toggle('1'); }}>About</button>
                    <button onClick={() => { toggle('2'); }}>Projects</button>
                    <button onClick={() => { toggle('3'); }}>Contact</button>
                    <button><a href={myPDF} download="Kirtesh.pdf">Resume</a><i className="fa fa-download "></i></button>
                </div>




            </div>
        </Fade>
    )
}

export default memo(Nav)