import React from 'react'
import Check from './check'
import Button from './Button'

const text = () => {
    const containerStyle = {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column', 
        padding:'5%'

      };

      const imojiStyle = {
        color:'var(--imoji)', 
        fontSize:'14px',
        fontWeight:'bold',
        paddingTop:'5%'
  
      };
      const titleStyle = {
        color:'var(--title)', 
        fontSize:'60px',
        fontWeight:'800',
        padding:'5% 0%'
      };
      const descriptionStyle = {
        
        color:'var(--description)', 
        fontSize:'18px',
        fontWeight:'bold',
      };
      const buttonsStyle = {
       width:'100%',
       height:'7%',
       display:'flex',
       alinItems:'center',
       marginTop:'5%', 
    };
      const checksStyle = {
        display:'flex',
       justifyContent:'center',
       alignItems:'center' ,
       width:'100%',
       height:'10%',
       paddingTop:'7%',
      };
  return (
    <div style={containerStyle}>
        <div style={imojiStyle} class='imoji'>😎  SIMPLE WAY TO COMMUNIVCATE</div>
        <div style={titleStyle} class='titleStyle'>Actions for Accessibility in Design</div>
        <div style={descriptionStyle} class='descriptionStyle'>The fastest way to build and deploy websites with resusable components.</div>
        <div style={buttonsStyle}><Button text={"GET STARTED"} empty={false}/><Button text={"Get live demo"} empty={true}/></div>
        <div style={checksStyle}><Check text={"No credit card required"} /><Check text={"No software to install"}/></div>
    </div>
  )
}

export default text