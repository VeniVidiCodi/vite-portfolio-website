import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className='nav-links'>
        <Link to='/'> <div>Gallery</div> </Link>
        <Link to='/about'> <div>About</div> </Link>
        <Link to='/contact'> <div>Contact</div> </Link>
    </div>
  )
}

export default NavBar