import { Link } from "react-router-dom"
import Dropdown from "./Dropdown.js";
import DropdownItem from "./dropdown_item/DropdownItem.js";

const ObiektyRdzeniaDropDown = () => {

    const fortyPosrednie = [
        "Bastion I", 
        "Bateria Dobrzyńska", 
        "Brama Kolejowa", 
        "Fort Jakuba", 
        "Fort Kolejowy", 
        "Magazyn Prowiantowy", 
        "Przyczółek Mostowy"
    ];

    const slugify = (text: string) => {
        return text
            .replace(/ł/g, "l")
            .replace(/Ł/g, "L")
            .normalize("NFD")
            .toLowerCase()
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s/g, "_");
    };

    return (
         <div>
            <Dropdown
            buttonText="Obiekty Rdzenia"
            content={fortyPosrednie.map((item) => (
                <Link 
                    to={`/forty_w_toruniu/obiekty_rdzenia/${slugify(item)}`} 
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

export default ObiektyRdzeniaDropDown;