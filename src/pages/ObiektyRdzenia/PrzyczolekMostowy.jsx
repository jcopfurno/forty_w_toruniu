import fortImage1 from "../../images/PrzyczolekMostowy_1.jpg"
import fortImage2 from "../../images/PrzyczolekMostowy_2.jpg"
import fortImage3 from "../../images/PrzyczolekMostowy_3.jpg"

function PrzyczolekMostowy () {
    return (
        <>
            <div className="fortContainer">
                <div className="sidebar"></div>
                <div className="content">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Przyczółek Mostowy </h1>
                        <p className="pHeroText"> Lata budowy: 1824-1828 </p>
                    </div>
                </div>

                <p className="pText"> Przyczółek mostowy został wzniesiony w latach 1824-1828 jako część wewnętrznego pierścienia Twierdzy Toruń. Po wybudowaniu w 1861 roku linii kolejowej do Bydgoszczy, na terenie fortu stanął dworzec kolejowy dzisiaj znany jako Toruń Główny. Kolejny raz przystąpiono do przebudowy w latach 1873-75, gdy rozbudowa linii kolejowych (do Poznania i do Wystrucia) wymusiła zredukowanie rozmiarów obiektu do takich, jakie dziś możemy podziwiać. Obecnie większość fortu zajmuje firma "Lacpol" zajmująca się wyrobem serów topionych. Zwiedzać można jedynie fosę i przedpole, gdzie urządzono park. </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
        </>
    )
}

export default PrzyczolekMostowy