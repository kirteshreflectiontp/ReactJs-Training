import React, { useState } from 'react';


const Videotab = (props) => {
 const [currentTab,setCurrentTab] = useState(props.videoTabs[0].key);
 const toggleTabs = (item) => {
    setCurrentTab(item);
 }
 return (
    <>
    <div className='nav_bar'> 
    <div className='sub_nav_bar'>
        {props.videoTabs.map((videoTab,index) =>(
            <span key={index} className={`${currentTab === videoTab.key ? 'active':''}video-text`} onClick={() => toggleTabs(videoTab.key)}>{videoTab.title}</span>
        ))}
</div>
</div>

<div className='video_block'>
    {props.videoTabs.map((videoTab) => (
        currentTab === videoTab.key && <div>{videoTab.content}</div>
    ))}
</div>
    
</>
 )

}
export default Videotab;



