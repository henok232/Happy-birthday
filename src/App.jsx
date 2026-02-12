import { useState } from 'react'
import Video from "../src/assets/happybirthday.mp4"
import postcard from '../src/assets/postcard.png'
function App() {
  const[firstseter, setFirstseter] = useState('firstcontainer')
  const[secondseter, setSecondseter] = useState('none')
  
  let button1 = ()=>{
    setFirstseter('none')
    setSecondseter('secondcontainer')
  }
  return (
    <>
    <div className="fullcontainer">


      <div className={firstseter}>
        <div className="sender">
      <h3>From Henok</h3><h3>To Dibora</h3>
    </div>
      
      <div className="videocontainer">
        <video muted loop autoPlay className='video' src={Video}></video>
      </div>

      <div className="happy">
        <h1 className="birthday">
        HAPPY <br /> BIRTHDAY
        </h1>
        
      </div>
        <h1 className="seeable">
          Please switch to phone...
        </h1>
      <div className="firstbtn">
        <button onClick={button1} className="btn1">
          See Your Message
        </button>
      </div>
      </div>

      <div className={secondseter}>
        <img className='postcard' src={postcard} alt="" />
        <a href="https://t.me/Rebirthed23" target="_blank">
          <button className="btn2">
          Go To Telegram
          </button>
        </a>
      </div>
    </div>
    </>
  )
}

export default App
