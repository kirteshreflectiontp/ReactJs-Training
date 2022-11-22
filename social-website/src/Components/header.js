import Search from './Search';
import './header.css';
import React, { useContext, useState } from 'react'
import Nav from './navlinks/nav';
import UserContext from './UserContext'
import VideoContext from './VideoContext';
const Header = () => {
    const [dp, setDp] = useState(false);
    const [dialog, setDialog] = useState(false);
   const  showVideoPopUp = (value) => {
    setDialog(value)
   }
   const{loggedInUser} = useContext(UserContext);
   const [videoTitle, setVideoTitle] = useState();
   const [videoURL, setVideoURL] = useState();
   const {setVideoData} = useContext(VideoContext);
   const uploadVideo = () => {
    if(videoTitle === '' || videoURL === ''){
      alert('enter video details');
    }
    else{
      const video = {
        username:loggedInUser.username,
        title:videoTitle,
        url:videoURL
      }
      const videoList = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [];
      videoList.push(video);
      localStorage.setItem('videos' , JSON.stringify(videoList));
      setVideoData(videoList)
    }
    showVideoPopUp(false)
   }
   const [videoNav,setVideoNav] = useState('youtube');
   const switchVideoUpload = (nav) => {
    setVideoNav(nav)
    setVideoURL('');
   }
   const setVideoURLFromLocal=(event) => {
    if(event.target.files[0]?.type ==='video/mp4'){
      console.log(event.target.files[0])
      setVideoURL(event.target.files[0])
    }
    else{
      setVideoURL('');
    }

   } 
    return (
<>
<div className="parent_header">
    <div>
        <span className='logo'>LoGo</span>
        <span><Search/></span>
    </div>
   
    <div className='header_clicks'>
        <div><button className='header_button' onClick={() => showVideoPopUp(true)}><i class="fa-solid fa-video-plus"></i>UPLOAD VIDEO</button></div>
        <div><button className='dots_button' onClick={(e) => {
          e.preventDefault();
          setDp(!dp);
        }}><span><i class="fa-solid fa-ellipsis-vertical "></i></span></button></div>
       {dp && <div><Nav/></div>}
    </div>
    {dialog &&
    <div>
    <div className='Upload_video-Overlay' onClick={() => showVideoPopUp(false)}></div>
    <>
    <div className='Video_upload'>
      <div className='choose_upload'>
        <div onClick={() => switchVideoUpload('youtube')} className={`${videoNav ==='youtube'? 'active':''}`}>Youtube</div>
        <div onClick={() => switchVideoUpload('computer')} className={`${videoNav ==='computer'? 'active':''}`}>My Computer</div>
      </div>
    <div className='Video_URL'>
    <h2>Upload Video</h2>
    <input type='text' value= {videoTitle} onChange ={(event) => setVideoTitle(event.target.value)} placeholder='Enter Video Tittle Here'/>
   
    </div>
    <div className='Video_URL'>
    {videoNav ==='youtube' &&
    <input type='text'value={videoURL} onChange = {(event) => setVideoURL(event.target.value)} placeholder='Enter Youtube Embeded URL here'/>
    }
    {videoNav ==='computer' &&
   <input type= 'file' onChange={(event) => setVideoURLFromLocal(event)}/>
    }
    </div>
    <div>
      <button onClick = {uploadVideo} >Upload</button>
    </div>
    <div>
    {videoURL &&
   <video controls><source src={`./${videoURL.name}`}/></video>
  }
    </div>
  </div>
  </>
    </div>
  }
</div>
</>
    )
}
export default Header;