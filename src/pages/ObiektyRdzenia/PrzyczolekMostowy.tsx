import FortPage from "@/components/FortPage"
import fortImage1 from "../../images/PrzyczolekMostowy_1.jpg"
import fortImage2 from "../../images/PrzyczolekMostowy_2.jpg"
import fortImage3 from "../../images/PrzyczolekMostowy_3.jpg"

/*52.99934423857228, 18.613238594673728*/
function PrzyczolekMostowy () {
    const Coordinates = {
        latitude: 52.99934423857228,
        longitude: 18.613238594673728
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Przyczółek Mostowy",
        "1824-1828",
        "Przyczółek mostowy został wzniesiony w latach 1824-1828 jako część wewnętrznego pierścienia Twierdzy Toruń. Po wybudowaniu w 1861 roku linii kolejowej do Bydgoszczy, na terenie fortu stanął dworzec kolejowy dzisiaj znany jako Toruń Główny. Kolejny raz przystąpiono do przebudowy w latach 1873-75, gdy rozbudowa linii kolejowych (do Poznania i do Wystrucia) wymusiła zredukowanie rozmiarów obiektu do takich, jakie dziś możemy podziwiać. Obecnie większość fortu zajmuje firma \"Lacpol\" zajmująca się wyrobem serów topionych. Zwiedzać można jedynie fosę i przedpole, gdzie urządzono park.",
        images,
        Coordinates
    )
}

export default PrzyczolekMostowy