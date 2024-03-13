
import './navbar.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './Home';
import AddCompany from './AddCompany';

const Navbar = () =>{
  
return(
    <div>
    <nav className="navbar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul>
          <li><NavLink className="navlink" to="/">Home</NavLink></li>
            <li><NavLink className="navlink" to="/home">Company</NavLink></li>
            <li><NavLink className="navlink" to="/addcompany">Add</NavLink></li>   
            
          </ul>
        </div>
      </div>       
    </nav>
    <Routes>
      <Route path="/Home" Component={Home} exact></Route>
      <Route path="/AddCompany" Component={AddCompany} exact></Route>
    </Routes>
    </div>
)

    
}
export default Navbar;