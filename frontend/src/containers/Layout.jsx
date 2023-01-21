import React from 'react';
import Navbar from '@/components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import CardLayout from '@/components/CardLayout';

function Layout() {
  return (
    <div class="container flex flex-row mt-10 justify-content-center">
      <Navbar/>
      <CardLayout/>
    </div>
  )
}

export default Layout