import FortPage from "@/components/FortPage"
import fortImage1 from "../../images/FortJakuba_1.jpg"
import fortImage2 from "../../images/FortJakuba_2.jpg"
import fortImage3 from "../../images/FortJakuba_3.jpg"

/*53.01302193104916, 18.623627806441995*/
function FortJakuba () {
    const Coordinates = {
        latitude: 53.01302193104916,
        longitude: 18.623627806441995
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Fort Jakuba",
        "1828-1833",
        "Fort Jakuba (Jacobsfort) to najstarszy z toruńskich fortów. Został on wzniesiony jako cytadela w latach 1828–1833. Mieściły się w nim stanowiska dla dział i moździerzy. W ramach modernizacji Twierdzy Toruń z lat 80 XIX wieku został podłączony do obwałowań twierdzy oraz wyposażony w armaty (2x21 cm, 2x15 cm). W czasach dwudziestolecia międzywojennego zasypano fosy i rozebrano większość Fortu poza trzypiętrową reditą. Po II Wojnie Światowej w byłej cytadeli utworzono lokale mieszkaniowe.",
        images,
        Coordinates
    )
}

export default FortJakuba