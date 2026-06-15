import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/BramaKolejowa_1.jpg"
import fortImage2 from "../../images/BramaKolejowa_2.jpg"

/*53.01457866178717, 18.61858408947366*/
function BramaKolejowa () {
    const Coordinates = {
        latitude: 53.01457866178717,
        longitude: 18.61858408947366
    }
    const images = [fortImage1, fortImage2]
    return FortPage(
        "Brama Kolejowa",
        "1884-1886",
        "Wzniesiona w latach 1884-1886 Brama Kolejowa została przeprowadzona przez wał łączący Bastion IV z Fortem św. Jakuba. Jest to jedyna zachowana (i ciągle używana brama) Twierdzy Toruń. W bramie mieści się również obecnie zamknięty i niedostępny blokhauz, z którego można było ostrzeliwać tory.",
        images,
        Coordinates
    )
}

export default BramaKolejowa