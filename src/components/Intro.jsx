import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer"],
      backDelay: 1500
    })

  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/sandwich-mountain.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ross Scharbach</h1>
          <h3>Web<span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
