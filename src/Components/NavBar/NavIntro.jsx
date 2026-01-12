import React from 'react'
import Nav from './Nav'
import Intro from '../Intro'
import bgVideo from "../../assets/interview.mp4";


const NavIntro = () => {
  return (
  <div className="relative h-screen w-full overflow-hidden">
  {/* Background video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={bgVideo}
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

  {/* Foreground content */}
  {/* <Nav /> */}
  <Intro />
</div>

  )
}

export default NavIntro
