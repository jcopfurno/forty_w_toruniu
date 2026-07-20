import "./Sidebar.css"
import SidebarComponent from './SidebarComponent'

function Sidebar () {
    const fortyGlowne = [
        "Fort IV", 
        "Fort VII", 
        "Fort XI"
    ];

    const fortyPosrednie = [
        "Fort I", 
        "Fort VI", 
        "Fort VIII", 
        "Fort X", 
        "Fort XII", 
        "Fort XIV"
    ];

    const obiektyRdzenia = [
        "Bastion I", 
        "Bateria Dobrzyńska", 
        "Brama Kolejowa", 
        "Fort Jakuba", 
        "Fort Kolejowy", 
        "Magazyn Prowiantowy", 
        "Przyczółek Mostowy"
    ];

    return (
        <div className="sidebar">
            <SidebarComponent
                title="Strona Główna"
                items={[]}
            />

            <SidebarComponent
                title="Forty Główne"
                items={fortyGlowne}
            />

            <SidebarComponent
                title="Forty Pośrednie"
                items={fortyPosrednie}
            />

            <SidebarComponent
                title="Obiekty Rdzenia"
                items={obiektyRdzenia}
            />
            
            <SidebarComponent
                title="Kontakt"
                items={[]}
            />
        </div>
    )
}

export default Sidebar;