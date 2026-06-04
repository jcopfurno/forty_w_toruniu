import FortPage from "@/components/FortPage"
import fortImage1 from "../../images/Fort_XII_1.jpg"
import fortImage2 from "../../images/Fort_XII_2.jpg"
import fortImage3 from "../../images/Fort_XII_3.jpg"

/*52.985431090113366, 18.593906443766183*/
function Fort_XII () {
    const Coordinates = {
        latitude: 52.985431090113366,
        longitude: 18.593906443766183
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Fort XII \"Władysław Jagiełło\"",
        "1890-1893",
        "Fort XII Władysław Jagiełło (dawniej Va Urlich von Jungingen) został wzniesiony w latach 1890-1893 na planie trapezu i pełnił rolę fortu pośredniego wzmacniającego południową linię obrony Twierdzy Toruń. Fort posiadał jedno (doświadczalne) stanowisko na armaty kalibru 10 cm i dwa tradytory. W 1920 roku opuszczające obiekt wojska niemieckie zabrały ze sobą instalacje: telefoniczną i telegraficzną oraz niektóre elementy wyposażenia. W 1942 roku więziono tu jeńców przewożonych potem do obozu na Glinkach. Obecnie Fort jest całkowicie opuszczony i zamieszkany przez bezdomnych.",
        images,
        Coordinates
    )
}

export default Fort_XII