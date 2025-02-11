
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './Pages/Content'
import Home from './Pages/Home'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    < Header />
    <Routes>

      <Route element={<Content />} path='/'></Route>
      <Route element={< Home/>} path='/home'></Route>
      <Route element={< History/>} path='/history'></Route>

    </Routes>
  
   <Footer />
    </>
  )
}

export default App
