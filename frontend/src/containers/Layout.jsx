import React, {useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '@/components/Navbar';
import CardLayout from '@/components/CardLayout';
import Sidebar from '@/components/Sidebar';


function Layout({user}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const scrollRef = useRef(null);

  return (
    <div class="d-flex " flex-row>
      <div class="d-flex h-screen flex-initial">
        <Sidebar user={user && user}/>
      </div>
    <div class="container flex  mx-100 ">
      <Navbar searchTerm ={searchTerm} setSearchTerm={setSearchTerm} user ={user && user}/>
      <CardLayout/>
    </div>
    </div>
  )
}

export default Layout