import fortImage1 from "../../images/Fort_X_1.jpg"
import fortImage2 from "../../images/Fort_X_2.jpg"
import fortImage3 from "../../images/Fort_X_3.jpg"

function Fort_X () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Bateria Nadbrzeżna (Fort X) </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Baterię Nadbrzeżną wzniesiono w latach 1889-1892 w celu ochrony doliny Wisły oraz linii kolejowej do Bydgoszczy i Solca Kujawskiego jako 12-komorowy schron piechoty z działobitniami. Gdy obiekt przeszedł pod administrację polską został uznany za fort i nadano mu numer X. Obecnie Bateria jest wystawiona na sprzedaż. </p>

                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default Fort_X