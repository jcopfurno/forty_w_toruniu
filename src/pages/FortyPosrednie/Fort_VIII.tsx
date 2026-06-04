import fortImage1 from "../../images/Fort_VIII_1.jpg"
import fortImage2 from "../../images/Fort_VIII_2.jpg"
import fortImage3 from "../../images/Fort_VIII_3.jpg"
import FortPage from "@/components/FortPage"

/*53.023009369298, 18.55705783400172*/
function Fort_VIII () {
    const Coordinates = {
        latitude: 53.023009369298,
        longitude: 18.55705783400172
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Fort VIII \"Kazimierz Wielki\"",
        "1888-1890",
        "Fort VIII \"Kazimierz Wielki\" (pierwotnie Fort IVb Herzog Albrecht) został wybudowany w latach 1888-1890 na planie trapezu. Obiekt przeznaczony był dla około 300-osobowej załogi i wyposażony w 3 stanowiska obserwacyjne piechoty W.T. 90 (to tutaj mieści się najwyższe tego typu stanowisko w Toruniu). Za czasów II RP pełnił funkcję koszar. W okresie II wojny światowej zapisano najciemniejszą kartę w jego historii: to tutaj więziono ludzi rozstrzeliwanych później na Barbarce, a 91 więźniów wywieziono do obozu koncentracyjnego w Sachsenhausen. W późniejszym okresie wojny \"Kazimierz\" pełnił rolę magazynu Luftwaffe. Dziś Fort VIII stoi pozostawiony na pastwę losu, choć miłośnicy fortyfikacji regularnie podejmują starania na rzecz poprawienia jego stanu (latem 2015 roku udrożniona została fosa i śluza fortu).",
        images,
        Coordinates
    )
}

export default Fort_VIII