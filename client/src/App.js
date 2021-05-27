import NavBar from './components/NavBar'
import Chat from './components/views/Chat'
import Stream from './components/views/Stream'
import Login from './components/views/Login'
import Qrcode from './components/views/Qrcode'
import Level from './components/views/Level'


import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className='App'> 
        <div className='board-top'>
          <Route exact path="/">
            <Chat />
          </Route>
          <Route path='/stream'>
            <Stream />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/qrcode'>
            <Qrcode />
          </Route>
          <Route path='/level'>
            <Level />
          </Route>
        </div>
        <div className='board-bottom'>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
