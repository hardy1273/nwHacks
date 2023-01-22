import React from 'react'
import Link from 'next/link';
//import { IoMdAdd, IoMdSearch } from 'react-icons/io';

import "bootstrap/dist/css/bootstrap.css";

function Navbar({searchTerm, setSearchTerm, user}) {

  
  return (
    <div class="flex flex-row p-50">
      <nav class="navbar bg-body-tertiary flex-row p-2  mt-10 " style={{outline : "none" , borderRadius: "50px"}}>
      <div class="container-fluid flex flex-row rounded-2">
        <form class="d-flex flex-row flex-10 w-100" role="search">
          <input class="form-control flex-6 me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          />
        </form>
      </div>
      </nav>
    </div>
  )
  
}

export default Navbar