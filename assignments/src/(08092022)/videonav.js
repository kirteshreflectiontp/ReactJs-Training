import React, { useState } from 'react';
import Video1 from './images/clip.mp4'
import Video2 from './images/Clip2.mp4'

const Videonav = () => {
 const [activeTab,setActiveTab] = useState('my-video');
 const tabToggle = (tab) => {
    setActiveTab(tab);
 }
 return (
    <>
    <div className='nav_bar'> 
    <div className='sub_nav_bar'>
<span className={`${activeTab === 'my-video'? 'active':''}video-text`} onClick={() => tabToggle('my-video')}>MY VIDEOS</span>
<span className={`${activeTab === 'shared-video'? 'active':''}video-text`} onClick={() => tabToggle('shared-video')}>SHARED VIDEOS</span>
</div>
</div>
<div>
    {activeTab === 'my-video' && 
<div className='video_block'>
    <span ><video src={Video1} className='vid'  controls></video></span>
    <span ><video src={Video1} className='vid'  controls></video></span>
    <span ><video src={Video1} className='vid'  controls></video></span>
</div>
}
{activeTab === 'shared-video' && 
<div className='video_block'>
    <span ><video src={Video2} className='vid'  controls></video></span>
    <span ><video src={Video2} className='vid'  controls></video></span>
    <span ><video src={Video2} className='vid'  controls></video></span>
</div>
}

</div>
    
</>
 )

}
export default Videonav;



