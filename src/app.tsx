import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Feed from './screens/feed'
import Library from './screens/library'
import Player from './screens/player'

export default function App() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/library' element={<Library/>} />
            <Route path='/player' element={<Player/>} />
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}
