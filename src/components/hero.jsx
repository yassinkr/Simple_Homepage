import React from 'react'
import Text from './text'

const hero = () => {
    const containerStyle = {
        width:'100%',
        height:'100%',
        display:'flex',
      };


  return (
    <div style={containerStyle} className='hero'>
        <div className='text'><Text/></div>
        <div  className='robot'></div>
        
    </div>
  )
}

export default hero