import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/Fort_X_1.jpg"
import fortImage2 from "../../images/Fort_X_2.jpg"
import fortImage3 from "../../images/Fort_X_3.jpg"

/*53.00213999909846, 18.565899490735152*/
function Fort_X () {
    const Coordinates = {
        latitude: 53.00213999909846,
        longitude: 18.565899490735152
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Bateria Nadbrzeżna (Fort X)",
        "1889-1892",
        "Baterię Nadbrzeżną wzniesiono w latach 1889-1892 w celu ochrony doliny Wisły oraz linii kolejowej do Bydgoszczy i Solca Kujawskiego jako 12-komorowy schron piechoty z działobitniami. Gdy obiekt przeszedł pod administrację polską został uznany za fort i nadano mu numer X. Obecnie Bateria jest wystawiona na sprzedaż.",
        images,
        Coordinates
    )
}

export default Fort_X