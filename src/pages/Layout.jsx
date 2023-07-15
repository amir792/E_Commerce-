import React from 'react'
import MyNav from '../component/MyNav'
import MyFooter from '../component/MyFooter'
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
    <MyNav />
    <Outlet />
    <MyFooter />
    
    </>
    
  )
}
