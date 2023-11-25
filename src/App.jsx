import React from 'react'
import { useEffect,useState } from 'react'
import Hero from './components/hero'
import Navbar from './components/navbar'
const App = () => {

  const [isToggled , setisToggle]=useState(false);
  const containerStyle = {
    width:'100%',
    height:'100vh',
  
    backgroundColor: 'var(--background)',  
  
  };


return (
  <div style={containerStyle}>
    <Navbar isToggled={isToggled} onToggle={() => setisToggle(!isToggled)}/>
     <Hero/>
  </div>
)
}

export default App