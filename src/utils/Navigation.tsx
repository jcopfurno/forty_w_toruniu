import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const categories = {
        forty_glowne: [
            "Fort IV", 
            "Fort VII", 
            "Fort XI"
        ],
        forty_posrednie: [
            "Fort I", 
            "Fort VI", 
            "Fort VIII", 
            "Fort X", 
            "Fort XII", 
            "Fort XIV"
        ],

        obiekty_rdzenia: [
            "Bastion I", 
            "Bateria Dobrzyńska", 
            "Brama Kolejowa", 
            "Fort Jakuba", 
            "Fort Kolejowy", 
            "Magazyn Prowiantowy", 
            "Przyczółek Mostowy"
        ]
    };

    const slugify = (text: string) => {
        return text
            .replace(/ł/g, "l")
            .replace(/Ł/g, "L")
            .normalize("NFD")
            .toLowerCase()
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s/g, "_");
    };

    function getArrayName(item: string) {
        return Object.entries(categories).find(([_, arr]) =>
            arr.includes(item)
        )?.[0] || null;
    }

    return (id: string) => {
        navigate(`/forty_w_toruniu/${getArrayName(id)}/${slugify(id)}`);
    };
};

export default Navigation;