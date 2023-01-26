import React from 'react'

function Mdb() {
  return (
    <div>
        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/Object">Home</a>
        <a class="nav-link" href="/Cards">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled"
          >Disabled</a
        >
      </div>
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Mdb
