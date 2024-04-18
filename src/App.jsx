
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Students from './pages/Students'
import Header from './components/Header'

function App() {


  return (
    <>
    <Header/>
     <Routes>
      <Route  path={'/'} element={<Home/>}/>
      <Route  path={'/students'} element={<Students/>}/>
   
     </Routes>
    </>
  )
}

export default App
