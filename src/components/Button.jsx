import React from 'react'

const Button = ({ empty, text }) => {
    console.log(empty);
    const containerStyle = {
      width: '40%',
      height: '100%',
      color: empty ? '#2A4DD0' : 'rgba(242, 249, 254, 1)',
      fontSize: '18px',
      fontWeight: '600',
      backgroundColor: empty ? 'none' : '#2A4DD0', // Change the background color conditionally
      borderRadius: '16px',
      textDecoration: empty ? 'underline' : 'none',  
    };
  
    return (
      <button style={containerStyle}>{text}</button>
    );
  };
  
  export default Button;
  