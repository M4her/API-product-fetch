import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>


    </>
  )
}

export default App