import React from 'react'
import Link from 'next/link';
//import { IoMdAdd, IoMdSearch } from 'react-icons/io';

import "bootstrap/dist/css/bootstrap.css";

function Navbar({searchTerm, setSearchTerm, user}) {
  
  
  return (
    <div class="flex flex-row p-50">
      <nav class="navbar bg-body-tertiary flex-row p-2 rounded-right mt-16 " style={{ outline : "none" }}>
      <div class="container-fluid flex flex-row rounded-2 border-rounded">
        <form class="d-flex flex-row  border rounded-border" role="search" style={{width: "90%"}}>
          <input class="form-control flex-6 me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          />
        </form>
        <div className="d-flex flex-row w-5 ">
          { user ?
          <Link href="/">
            <img src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbXBsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user-pic" class="img-fluid " style={{borderRadius: 50 , width: 30 , height: 30 }} />
          </Link>
          :
          <Link href="/">
            <p class="mt-2 fs-3 fw-medium ">Login </p>
          </Link>
         }
         {
          user &&
          <Link>
            
          </Link>

         }
          </div>
      </div>
      
      </nav>
    </div>
  )
  
}

export default Navbar