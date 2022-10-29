import React from 'react'
import Login from './components/Login/Login'
import WeatherMain from './components/WeatherMain/WeatherMain'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login'element={<Login/>}/>
        <Route exact path='/'element={<WeatherMain/>}/>
        <Route exact path='/register'element={<Register/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}