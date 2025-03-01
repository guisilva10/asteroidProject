import React from 'react';

import { Outlet } from 'react-router-dom'

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

function PageInicial() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}


export default PageInicial
