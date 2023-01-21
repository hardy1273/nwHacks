import React from 'react';
import Navbar from '@/components/Navbar';
import "bootstrap/dist/css/bootstrap.css";

function Layout() {
  return (
    <div class="container flex flex-row mt-10 justify-content-center">
      <Navbar/>
    </div>
  )
}

export default Layout