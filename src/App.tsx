import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'

const App = () => {
  return (
      <div className="box-border flex flex-col h-screen">
        <Navbar />
        <Menu />
      </div>
  )
};

export default App;