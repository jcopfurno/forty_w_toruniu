import { Link } from "react-router-dom"
import Dropdown from "./Dropdown.js";
import DropdownItem from "./DropdownItem/DropdownItem.js";

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
                        <DropdownItem onClick={() => {}}>
                            {item}
                        </DropdownItem>
                </Link>
            ))}
            />
        </div>
    );
};

export default FortyGlowneDropdown;