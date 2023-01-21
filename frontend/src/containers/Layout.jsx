import React from 'react';
import Navbar from '@/components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import CardLayout from '@/components/CardLayout';

function Layout() {
  return (
    <div class="container flex justify-content-center">
      <Navbar/>
      <CardLayout/>
    </div>
  )
}

export default Layout