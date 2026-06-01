import { fortMap } from "@/components/fortMap"
import fortImage1 from "../../images/Fort_X_1.jpg"
import fortImage2 from "../../images/Fort_X_2.jpg"
import fortImage3 from "../../images/Fort_X_3.jpg"

/*53.00213999909846, 18.565899490735152*/
function Fort_X () {
    const Coordinates = {
        latitude: 53.00213999909846,
        longitude: 18.565899490735152
    }
    return (
        <>
        <div className="content">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <img src={fortImage1}></img>
                </div>

                <div className="heroTextContainer">
                    <h1 className="h1Text"> Bateria Nadbrzeżna (Fort X) </h1>
                    <p className="pHeroText"> Lata budowy: 1889-1892 </p>
                </div>
            </div>

            <p className="pText"> Baterię Nadbrzeżną wzniesiono w latach 1889-1892 w celu ochrony doliny Wisły oraz linii kolejowej do Bydgoszczy i Solca Kujawskiego jako 12-komorowy schron piechoty z działobitniami. Gdy obiekt przeszedł pod administrację polską został uznany za fort i nadano mu numer X. Obecnie Bateria jest wystawiona na sprzedaż. </p>


            <div className="Gallery">
                <img src={fortImage2}></img>
                <img src={fortImage3}></img>
            </div>

            <div className="mapSection">
                {fortMap(Coordinates)}
            </div>
        </div>
        </>
    )
}

export default Fort_X