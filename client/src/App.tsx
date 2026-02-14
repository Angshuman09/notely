import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))

function App() {
  return (
    <div className='w-full h-screen'>
      <Suspense fallback={
        <div className="flex h-full w-full items-center justify-center bg-background">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
        </div>
      }>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
