import React, { useState } from 'react';
import  './Audio.css';
import { Howl, Howler } from 'howler';
import para from './Paradigm.mp3';


function Audio() {
    const [isPlaying, setIsPlaying] = useState(true)


    var sound = new Howl({
        src: [para],
        autoplay: false,
        loop: true,
    });
    sound.once('load', () => {
        sound.play();
    });

    Howler.volume(0.5);


    const handleclick = () => {
        setIsPlaying(!isPlaying)

        if (!isPlaying) {

            Howler.mute(false)
            sound.fade(0.3, 1, 1000)
            return
        }
        if (isPlaying) {
            console.log("band" + sound.playing());
            sound.fade(1, 0.3, 1000)
            setTimeout(() => {
                Howler.mute(true)
            }, 1100);

            return
        }
    }


    return (
        <div className='audioContainer'>
            <button onClick={handleclick} id="musicButton">
                <i className={isPlaying ? `fa fa-music fa-5x ` : `fa fa-play fa-5x `}></i>
            </button>
            <label htmlFor="musicButton"><h3>Paradigm</h3> <h4>Revolt Production Music</h4> </label>
        </div>
    )
}

export default Audio

