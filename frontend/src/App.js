import React from 'react'
import TopNav from './components/TopNav'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ClikButtonTop from './components/ClikButtonTop'
const App = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Outlet />
      <ClikButtonTop/>
      {/* <Footer /> */}
    </div>
  )
}

export default App
