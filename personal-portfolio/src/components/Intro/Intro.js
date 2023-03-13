import React, { memo } from 'react';
import styles from  './Intro.module.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';


function Intro() {


    return (
        <Fade duration={2000}>
            <div className={styles.container}>
                <h1> Hi, I'm <br />Kirtesh Gaikwad</h1>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 5,
                        delay: 100,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("I'm a full stack developer.")
                            .pauseFor(2000)
                            .deleteChars(21)
                            .pauseFor(500)
                            .typeString("Team Player.")
                            .pauseFor(2000)
                            .deleteChars(14)
                            .pauseFor(500)
                            .typeString("Creative.")
                            .pauseFor(2000)
                            .start();
                    }}
                />

            </div>
        </Fade>
    )
}

export default memo(Intro)