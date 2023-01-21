import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <div class="flex flex-row p-50">
      <nav class="navbar bg-body-tertiary flex-row p-2  mt-10">
      <div class="container-fluid flex flex-row rounded-2">
        <form class="d-flex flex-row" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      </nav>
    </div>
  )
}

export default Navbar