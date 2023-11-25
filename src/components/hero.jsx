import React from 'react'
import Text from './text'

const hero = () => {
    const containerStyle = {
        width:'100%',
        height:'100%',
        display:'flex',
        
        
      

      };

      const robotStyle = {
        width:'45%',
        height:'60%',
        backgroundImage: 'url("src/assets/hero-image-simple-homepage.png")',
        backgroundSize: 'contain', // You can adjust this property
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop:'3%' ,
        marginLeft:'3%' 
        
  };


      const textStyle = {
        width:'45%',
        height:'100%',
        paddingLeft:'5%',
        
        
      };

  return (
    <div style={containerStyle}>
        <div style={textStyle}><Text/></div>
        <div style={robotStyle}></div>
        
    </div>
  )
}

export default hero