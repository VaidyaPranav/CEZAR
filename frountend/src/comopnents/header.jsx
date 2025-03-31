import "bootstrap/dist/css/bootstrap.min.css";
import { RiAccountCircleFill } from "react-icons/ri";
import "../index.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
let Header = () => {
  return ( <> 
<header class="p-3 text-bg-dark">

    <div class="container">

      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <div className="image"></div>
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/Home" class="nav-link px-2 color text-white">Home</Link></li>
          <li><Link to="/events" class="nav-link px-2 color text-white">Events</Link></li>
          <li><Link to="/Organizing" class="nav-link px-2 color text-white">Organizing-Committe</Link></li>
          <li><Link to="/Aboutus" href="#" class="nav-link px-2 color text-white">About us</Link></li>
          <li><Link to="/Contactus" class="nav-link px-2 color text-white">Contact us</Link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
          
        </div>

        
      </div>

    </div>
  </header>
  </>)
}
export default Header;