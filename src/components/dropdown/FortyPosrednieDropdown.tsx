import { Link } from "react-router-dom"
import Dropdown from "./Dropdown.js";
import DropdownItem from "./dropdown_item/DropdownItem.js";

const FortyPosrednieDropdown = () => {

    const fortyPosrednie = [
        "Fort I", 
        "Fort VI", 
        "Fort VIII", 
        "Fort X", 
        "Fort XII", 
        "Fort XIV"
    ];

    return (
         <div>
            <Dropdown
            buttonText="Forty Pośrednie"
            content={fortyPosrednie.map((item) => (
                <Link 
                    to={`/forty_w_toruniu/forty_posrednie/${item.replace(/\s/g, "_").toLowerCase()}`} 
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

export default FortyPosrednieDropdown;