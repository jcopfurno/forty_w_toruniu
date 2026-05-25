import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem/DropdownItem";

const FortyGlowneDropdown = () => {

    const fortyGlowne = [
        "Fort IV", 
        "Fort VII", 
        "Fort XI"
    ];

    return (
        <div>
            <Dropdown 
            buttonText="Forty Główne"
            content={fortyGlowne.map((item) => (
                <Link 
                    to={`/forty_w_toruniu/forty_glowne/${item.replace(/\s/g, "_").toLowerCase()}`} 
                    key={item}
                    className="link-dropdown">
                        <DropdownItem>
                            {item}
                        </DropdownItem>
                </Link>
            ))}
            />
        </div>
    );
};

export default FortyGlowneDropdown;