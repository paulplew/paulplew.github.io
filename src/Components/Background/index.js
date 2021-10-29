import React from "react";
import P5Sketch from "./sketch";


const Background = () => {
  return (
    <div id="background"
      style={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        zIndex: '-99'
      }}>
    </div>
  )
}

export default Background;