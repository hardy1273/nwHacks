import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary flex-row justify-content-center mt-10">
      <div class="container-fluid flex flex-row rounded-2">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      </nav>
    </div>
  )
}

export default Navbar