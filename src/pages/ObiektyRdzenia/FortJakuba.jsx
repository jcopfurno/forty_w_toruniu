import fortImage1 from "../../images/FortJakuba_1.jpg"
import fortImage2 from "../../images/FortJakuba_2.jpg"
import fortImage3 from "../../images/FortJakuba_3.jpg"

function FortJakuba () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Fort Jakuba </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Fort Jakuba (Jacobsfort) to najstarszy z toruńskich fortów. Został on wzniesiony jako cytadela w latach 1828–1833. Mieściły się w nim stanowiska dla dział i moździerzy. W ramach modernizacji Twierdzy Toruń z lat 80 XIX wieku został podłączony do obwałowań twierdzy oraz wyposażony w armaty (2x21 cm, 2x15 cm). W czasach dwudziestolecia międzywojennego zasypano fosy i rozebrano większość Fortu poza trzypiętrową reditą. Po II Wojnie Światowej w byłej cytadeli utworzono lokale mieszkaniowe. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default FortJakuba