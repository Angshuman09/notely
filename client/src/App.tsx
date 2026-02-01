import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SingUp'
function App() {
  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
