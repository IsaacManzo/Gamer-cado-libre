import './App.css';
//import {useEffect, useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Navbar from './commons/Navbar';
import Footer from './commons/Footer';
import SignUp from './components/Signup';
import SignIn from './components/SIgnin';
//import signIn from './components/signIn'

function App() {

  const navigate = useNavigate()
  return (
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Navbar/>
            <button onClick={()=>{navigate('/signup')}}>signup</button>
            <button onClick={()=>{navigate('/signin')}}>signin</button>
            <Footer/>
          </div>
        }/>
        <Route path='/cart' element={''}/>
        <Route path='/signup' element={<><SignUp/></>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/products' element={''}/>
        <Route path='/products/:genre' element={''}/>
      </Routes>
  );
}

export default App;
