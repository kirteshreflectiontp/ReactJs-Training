import React, { useContext } from 'react'
import Video1 from './images/clip.mp4'
import Video2 from './images/Clip2.mp4'
import VideoContext from './VideoContext'
import Videotab from './videotab'
const Videoblock = () => {
const {videoData} = useContext(VideoContext);


    const videoTabs =[
    {
      key : 'My-Videos',
      title : 'My-Videos',
      content: [(<div className='video_block'>
       
        {videoData?.map((video, index) => (
      <div  key={index}>
        <h3>{video.title}</h3>
        <iframe title='vidio' className='vid' src = {video.url} />
        </div>
        
      ))}
  </div>
      )]
    },
    {
        key : 'Default-Videos',
        title : 'Default-Videos',
        content: [(<div className='video_block'>
        <span ><video src={Video2} className='vid'  controls></video></span>
        <span ><video src={Video2} className='vid'  controls></video></span>
        <span ><video src={Video2} className='vid'  controls></video></span>
    </div>
        )]
      },
      {
          key : 'Watched-Videos',
          title : 'Watched-Videos',
          content: [(<div className='video_block'>
          <span ><video src={Video2} className='vid'  controls></video></span>
          <span ><video src={Video2} className='vid'  controls></video></span>
          <span ><video src={Video2} className='vid'  controls></video></span>
      </div>
          )]
        },
        {
            key : 'Deleted-Videos',
            title : 'Deleted-Videos',
            content: [(<div className='video_block'>
            <span ><video src={Video2} className='vid'  controls></video></span>
            <span ><video src={Video2} className='vid'  controls></video></span>
            <span ><video src={Video2} className='vid'  controls></video></span>
        </div>
            )]
          }
]
  return (
    <div>
        <Videotab videoTabs={videoTabs} />
    </div>
  )
}

export default Videoblock;