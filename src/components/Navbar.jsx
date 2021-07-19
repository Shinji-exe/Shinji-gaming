import {Link} from "react-router-dom"
import React from "react"
import "./Navbar.css"
import photo1 from "../photos/Shinji-exe.png"

function Navbar(){

    return(
            <nav className="navs">
                <div className = "name">
                    {/* <Link to = "/" className="Shinji">Shinji</Link> */}
                    <h1>Shinji</h1>
                    </div>
                    <div className = "logo">
                        <img className="logo" src = {photo1}/>
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