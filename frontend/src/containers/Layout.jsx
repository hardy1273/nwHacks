import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '@/components/Navbar';
import CardLayout from '@/components/CardLayout';

function Layout({user}) {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div class="container flex  mt-10 ">
      <Navbar searchTerm ={searchTerm} setSearchTerm={setSearchTerm} user ={user && user}/>
      <CardLayout/>
    </div>
  )
}

export default Layout