import fortImage1 from "../../images/Fort_XI_1.jpg"
import fortImage2 from "../../images/Fort_XI_2.jpg"
import fortImage3 from "../../images/Fort_XI_3.jpg"
import fortImage4 from "../../images/Fort_XI_4.jpg"
import FortPage from "@/components/fort_page/FortPage"

/*52.98611593969672, 18.574486208355957*/
function Fort_XI () {
    const Coordinates = {
        latitude: 52.98611593969672,
        longitude: 18.574486208355957
    }
    const images = [fortImage1, fortImage2, fortImage3, fortImage4]
    return FortPage(
        "Fort XI \"Stefan Batory\"",
        "1877-1884",
        "Fort XI Twierdzy Toruń został zbudowany w latach 1877-1884 na planie pięciokąta. W Forcie otoczonym suchą fosą stacjonowała załoga złożona z 650 altylerzystów i jednego batalionu piechoty. Gdy niemiecka załoga opuszczała obiekt zabrała ze sobą większość wyposażenia fortu i zniszczyła kable telefoniczne i telegraficzne. Podczas II Wojny Światowej byli tam przetrzymywani jeńcy brytyjscy, którzy przymusowo rozbudowywali dworzec Toruń Kluczyki. Do dziś w pomieszczeniach kaponiery czołowej można podziwiać pozostawione przez nich napisy. W 1999 roku w Forcie znaleziono 3 skrzynie z niemiecką amunicją wraz z karabinami snajperskimi.",
        images,
        Coordinates
    )
}

export default Fort_XI