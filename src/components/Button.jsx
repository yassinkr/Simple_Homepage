import React from 'react'

const Button = ({ empty, text }) => {
    console.log(empty);
    const containerStyle = {
     
      color: empty ? '#2A4DD0' : 'rgba(242, 249, 254, 1)',
     
      backgroundColor: empty ? 'none' : '#2A4DD0', // Change the background color conditionally
      
      textDecoration: empty ? 'underline' : 'none',  
    };
  
    return (
      <button style={containerStyle} className='buttonStyle'>{text}</button>
    );
  };
  
  export default Button;
  