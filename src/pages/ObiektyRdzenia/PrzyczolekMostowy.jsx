import fortImage1 from "../../images/PrzyczolekMostowy_1.jpg"
import fortImage2 from "../../images/PrzyczolekMostowy_2.jpg"
import fortImage3 from "../../images/PrzyczolekMostowy_3.jpg"

function PrzyczolekMostowy () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Przyczolek Mostowy </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Przyczółek mostowy został wzniesiony w latach 1824-1828 jako część wewnętrznego pierścienia Twierdzy Toruń. Po wybudowaniu w 1861 roku linii kolejowej do Bydgoszczy, na terenie fortu stanął dworzec kolejowy dzisiaj znany jako Toruń Główny. Kolejny raz przystąpiono do przebudowy w latach 1873-75, gdy rozbudowa linii kolejowych (do Poznania i do Wystrucia) wymusiła zredukowanie rozmiarów obiektu do takich, jakie dziś możemy podziwiać. Obecnie większość fortu zajmuje firma "Lacpol" zajmująca się wyrobem serów topionych. Zwiedzać można jedynie fosę i przedpole, gdzie urządzono park. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default PrzyczolekMostowy