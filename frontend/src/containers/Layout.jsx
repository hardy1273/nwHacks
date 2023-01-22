import React, {useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '@/components/Navbar';
import CardLayout from '@/components/CardLayout';
import Sidebar from '@/components/Sidebar';
import Masonry from 'react-masonry-css';


function Layout({user}) {

  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const scrollRef = useRef(null);

  return (
    <div class="d-flex h-screen" style={{backgroundColor: "#E2FDFF" , height: "100vh"}}>
      
        <Sidebar user={user && user}/>
      
    <div class="container " styel={{height: "100vh"}}>
      <Navbar searchTerm ={searchTerm} setSearchTerm={setSearchTerm} user ={user && user}/>
      <div className='cheesy-text' class="text-center" style={{textAlign: "center", color:"#BFD7FF", padding:"25px"}}>
        <h1>Insert cheesy text</h1>
      </div>
      <CardLayout/>
    </div>
    </div>
  )
}

export default Layout