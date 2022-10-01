import React, { useContext } from 'react'
import Video1 from './images/clip.mp4'
import Video2 from './images/Clip2.mp4'
import VideoContext from './VideoContext'
import UserContext from './UserContext'
import Videotab from './videotab'
const Videoblock = () => {
const {videoData} = useContext(VideoContext);
const {loggedInUser} = useContext(UserContext)

    const videoTabs =[
    {
      key : 'My-Videos',
      title : 'My-Videos',
      content: [(<div className='video_block'>
        {videoData?.map((video, index) => (
          <>{loggedInUser?.username === video.username &&
      <div  key={index}>
        <h3>{video.title}</h3>
        <iframe className='vid' src = {video.url} />
        </div>
        }
        </>
      ))}
  </div>
      )]
    },
    {
        key : 'Shared-Videos',
        title : 'Shared-Videos',
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
        content:'No Video Deleted'
      },
      {
        key : 'Watched-Videos',
        title : 'Watched-Videos',
        content:[(<div className='video_block'>
        <span ><video src={Video1} className='vid'  controls></video></span>
        <span ><video src={Video2} className='vid'  controls></video></span>
        <span ><video src={Video1} className='vid'  controls></video></span>
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