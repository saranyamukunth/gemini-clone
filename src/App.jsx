import React from 'react'
import Sidebars from './components/Sidebar/Sidebars' 
import Main from './components/Main/Main'
import Sticky from 'react-stickynode'



const App = () => {
  return (
    <>
    <Sticky>
      <Sidebars></Sidebars></Sticky>
      <Main></Main>
    </>
  )
}

export default App

;