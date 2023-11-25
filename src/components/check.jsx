import React from 'react'

const check = ({text}) => {
    const containerStyle = {
        width:'100%',
        height:'100%',
        display:'flex',
        backgroundColor:  'var(--background)',  
        padding:'1%',
        justifyContent:'left',
        alineItems:'center',
      };
    
      const textStyle = {
        fontSize:'15px',
        backgroundColor: 'var(--background)',  
        paddingLeft:'4%',
        color:'var(--description)', 
        fontWeight:'bold',
      };

  return (
    <div style={containerStyle}>
    <div ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#4CA154"/>
    </svg></div>
    <div style={textStyle}>{text}</div>
    </div>
  )
}

export default check