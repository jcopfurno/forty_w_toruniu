import { Link } from "react-router-dom"
import FortyGlowneDropdown from "./dropdown/FortyGlowneDropdown.js";
import FortyPosrednieDropdown from "./dropdown/FortyPosrednieDropdown.js";
import ObiektyRdzenia from "./dropdown/ObiektyRdzeniaDropdown";
import './Header.css'

function Header() {
    return (
        <>
        <header>
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
            </header>  
        </>
    )
}
    
export default Header