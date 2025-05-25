import { useState ,lazy,Suspense, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'


const Home = lazy(() => import('./components/Home'))
const Projects = lazy(() => import('./components/Projects'))
const Blogs = lazy(() => import('./components/Blogs'))  
const Contact = lazy(() => import('./components/Contact'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  

  useEffect(()=>{
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

  return (

    <div className='bg-black min-h-screen font-jura text-white max-w-3xl mx-auto px-4'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Suspense fallback="loading"><Home></Home></Suspense> } />
        <Route path='/projects' element={<Suspense fallback="loading"><Projects /></Suspense>} />
        <Route path='/blogs' element={<Suspense fallback="loading"><Blogs /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback="loading"><Contact /></Suspense>} />
      </Routes>

      <Footer />
    </div>

  )
} 

export default App
