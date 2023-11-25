import React from 'react'

import './Mood.css'

import classNames from 'classnames'
const Mood = ({isToggled,onToggle}) => {
  
 
    
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute('data-theme','dark');
    }
    const setLightMode=()=>{
        document.querySelector("body").setAttribute('data-theme','light');}
       
       
    
   

    const handleToggle = () => {
        onToggle(!isToggled); // Toggle the state
        if (!isToggled) {
            setLightMode();
        }
        else {
            
            setDarkMode(); // Call setDarkMood when checked
        }
      };

      const sliderMoonClass = classNames('slider', { 'mooncss': isToggled });

  return (
    <div>
        <label  className='switch'>
        <input type='checkbox' checked={isToggled} onChange={handleToggle}/>
       <span className={sliderMoonClass}/>
    </label>
    </div>
  )
}

export default Mood