import React from 'react'
import Intro from './Components/Intro'
import Nav from './Components/NavBar/Nav'
import Card from './Components/Card'
import NavIntro from './Components/NavBar/NavIntro'
import Main from './Components/Main'
import NetflixLogo from './assets/NetflixLogo'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Professional from './Pages/Professional'
import Hire from './Pages/Hire'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'
import NotFound from './Pages/NotFound'
import LoadingPage from './Pages/LoadingPage'
import Certificate from './Pages/Certificate'
import Recommendation from './Pages/Recommendation'
import Music from './Pages/Music'
import Reading from './Pages/Reading'
import Blog from './Pages/Blog'

const App = () => {

   
  return (
    <div className="min-h-screen relative w-full  text-white">
     
      <Nav />
      
      <Routes>
        <Route path='/MyPortfolio/' element={<Home />} /> 
        <Route path='/professional' element={<Professional />} />
        <Route path='/hire' element={<Hire />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills /> } />
        <Route path='/profiles' element={<LoadingPage />} />
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/recommend' element={<Recommendation/>}/>
         <Route path='/music' element={<Music/>}/>
         <Route path='/reading' element={<Reading/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
