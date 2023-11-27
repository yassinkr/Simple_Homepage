import React from 'react'
import { useEffect,useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/navbar'
const App = () => {

  const [isToggled , setisToggle]=useState(true);
  const [isToggledNav , setisToggleNav]=useState(false);
  const containerStyle = {
    width:'100%',
    height:'100%',
  
    backgroundColor: 'var(--background)',  
  
  };
  

return (
  <div style={containerStyle}>
    <Navbar isToggled={isToggled} onToggle={() => setisToggle(!isToggled)} isToggledNav={isToggledNav} onToggleNav={() => setisToggleNav(!isToggledNav)} />
     <Hero/>
  </div>
)
}

export default App