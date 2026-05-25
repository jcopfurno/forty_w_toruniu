import fortImage1 from "../../images/FortJakuba_1.jpg"
import fortImage2 from "../../images/FortJakuba_2.jpg"
import fortImage3 from "../../images/FortJakuba_3.jpg"

function FortJakuba () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Fort Jakuba </h1>
                        <p> Lata budowy: 1828-1833 </p>
                    </div>
                </div>

                <p className="pText"> Fort Jakuba (Jacobsfort) to najstarszy z toruńskich fortów. Został on wzniesiony jako cytadela w latach 1828–1833. Mieściły się w nim stanowiska dla dział i moździerzy. W ramach modernizacji Twierdzy Toruń z lat 80 XIX wieku został podłączony do obwałowań twierdzy oraz wyposażony w armaty (2x21 cm, 2x15 cm). W czasach dwudziestolecia międzywojennego zasypano fosy i rozebrano większość Fortu poza trzypiętrową reditą. Po II Wojnie Światowej w byłej cytadeli utworzono lokale mieszkaniowe. </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
        </>
    )
}

export default FortJakuba