import {Link} from "react-router-dom"
import React from "react"
import "./Navbar.css"


function Navbar(){

    return(
            <nav className="navs">
                <div className = "name">
                   
                    <h1>Shinji</h1>
                    </div>
                    <div className = "logo">
                       
                    </div>
            <div className = "links">
            <Link to = "/Home">Home</Link>
               <Link to ="/popular">Popular</Link>
                <Link to = "/history">History</Link>
                <Link to = "/blog">Blog</Link>
            </div>
              
        </nav>
        
        
    )
}

export default Navbar