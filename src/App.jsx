

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hello from './assets/hello'
import Pen from './pen'
import Section from './section'
import Footer from './footer'
import Home from './home'
import Example from '../public/Example'
import Layout from './layout'

function App() {
  return (
    <>
    
  <BrowserRouter>
      <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/section' element={<Section />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/pen' element={<Pen />} />
      <Route path='/hello' element={<Hello />} />
      <Route path='Example' element={<Example />} />
    </Routes>
      </Layout>
      
  </BrowserRouter>


      {/* <Hello />
      <Section />
      <Footer />
      <Pen /> */}

       {/* <Hello /> */}
       {/* <Footer /> */}
       {/* <Navber /> */}


      
    </>
  )
}

export default App


