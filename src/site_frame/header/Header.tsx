import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import FortyGlowneDropdown from "@/components/dropdown/FortyGlowneDropdown.js";
import FortyPosrednieDropdown from "@/components/dropdown/FortyPosrednieDropdown.js";
import ObiektyRdzenia from "@/components/dropdown/ObiektyRdzeniaDropdown";

import Sidebar from "../../components/sidebar/Sidebar"
import './Header.css'
import React from "react";

function Header() {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
        <header>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <Link to="/forty_w_toruniu/" className="link-header"> 
                    <button className="button-header">
                        Strona Główna
                    </button> 
                </Link>

                <div>
                    <FortyGlowneDropdown />
                </div>
                
                <div>
                    <FortyPosrednieDropdown />
                </div>

                <div>
                    <ObiektyRdzenia />
                </div>

                <Link to="/forty_w_toruniu/kontakt" className="link-header">
                    <button className="button-header">
                        Kontakt
                    </button>
                </Link>
            </nav>

            <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {menuOpen && <Sidebar />}
            </nav>
        </header>  
    </>
    )
}
    
export default Header