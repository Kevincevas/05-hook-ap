import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar />
        <hr />



        <div>
          {/* Enrutamiento proveniente del main.js */}
          <Outlet></Outlet>
        </div>

    </UserProvider>
  )
}
