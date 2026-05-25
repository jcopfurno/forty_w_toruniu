import { Link } from "react-router-dom"
import FortyGlowneDropdown from "./dropdown/FortyGlowneDropdown";
import FortyPosrednieDropdown from "./dropdown/FortyPosrednieDropdown";
import ObiektyRdzenia from "./dropdown/ObiektyRdzeniaDropDown";
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
                    <FortyGlowneDropdown> </FortyGlowneDropdown>
                </div>
                
                <div>
                    <FortyPosrednieDropdown></FortyPosrednieDropdown>
                </div>

                <div>
                    <ObiektyRdzenia></ObiektyRdzenia>
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