function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home">
        React Lab
      </a>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
