import React from 'react'
import { Link} from "react-router-dom"
import Counter from '../../PAGES/Counter/Counter'



 const Navbar = () => {
  return (
    <nav>
    <div className="container">
        <div className="flex-menu">
            
            <Link to="/Toggle">Toggle</Link>
            <Link to="/Object">Object</Link>
            <Link to="/Liste">List</Link>
            <Link to="/Counter">Compteur</Link>
          
        </div>
    </div>
</nav>
  )
}

export default Navbar