import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/Fort_VII_1.jpg"
import fortImage2 from "../../images/Fort_VII_2.jpg"
import fortImage3 from "../../images/Fort_VII_3.jpg"

/*53.03423786594153, 18.56303923638595*/
function Fort_VII () {
    const Coordinates = {
        latitude: 53.03423786594153,
        longitude: 18.56303923638595
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Fort VII \"Tadeusz Kościuszko\"",
        "1879-1883",
        "Fort altyleryjski zbudowany w latach 1879-1883 na planie pięciokąta. W latach 90 XIX wieku przeszedł modernizację, w wyniku której stał się odporny na ogień z dział kalibru 150 mm. Fort VII był głównym fortem zachodniego odcinka obrony miasta Torunia. W 1920 w obiekcie urządzono szpital weneryczny, zaś w latach 1939-1940 hitlerowscy okupanci urządzili w forcie więzienie Gestapo. (Stąd też miejsce pamięci przy lewej kaponierze). Obecnie część fortu użytkuje prywatna firma. Pozostała część jest opuszczona.",
        images,
        Coordinates
    )
}

export default Fort_VII