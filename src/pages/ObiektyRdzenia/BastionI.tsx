import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/BastionI_1.jpg"
import fortImage2 from "../../images/BastionI_2.jpg"
import fortImage3 from "../../images/BastionI_3.jpg"

/*53.010175477673, 18.61567593627032*/
function BastionI () {
    const Coordinates = {
        latitude: 53.010175477673,
        longitude: 18.61567593627032
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Bastion I \"Nowy\"",
        "1629-1631",
        "Bastion I \"Menniczy\" powstał w latach 1629-1631. W początkowej formie był tylko zespołem wałów ziemnych. Przechodził modernizacje w latach 1656,1702-1703 i przez cały wiek XIX. Na terenie Bastionu można znaleźć pozostałości pruskich fortyfikacji : prochownię wojenną, składnicę saperską oraz schron, wybudowany w 1890 roku. Można tam wejść za zgodą właściciela obiektu.",
        images,
        Coordinates
    )
}

export default BastionI