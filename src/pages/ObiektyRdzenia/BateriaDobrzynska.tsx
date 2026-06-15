import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/BateriaDobrzynska_1.jpg"
import fortImage2 from "../../images/BateriaDobrzynska_2.jpg"
import fortImage3 from "../../images/BateriaDobrzynska_3.jpg"
import fortImage4 from "../../images/BateriaDobrzynska_4.jpg"

/*53.01547784084664, 18.616103540997013*/
function BateriaDobrzynska () {
    const Coordinates = {
        latitude: 53.01547784084664,
        longitude: 18.616103540997013
    }
    const images = [fortImage1, fortImage2, fortImage3, fortImage4]
    return FortPage(
        "Bateria Dobrzyńska",
        "1889-1892",
        "Dwa schrony (podwalniowy, w którym mieściło się laboratorium, w którym przygotowywano ładunki i pogotowia, zabezpieczający załogę przed ostrzałem) pozostałe po oddanej do użytku w 1886 roku Baterii Dobrzyńskiej. Bateria przeznaczona na działa RK (Ring-Kanone) 15 cm miała za zadanie prowadzić ostrzał linii kolejowej biegnącej w kierunku Iławy. Obiekt używany był przez wojsko jeszcze w czasach PRL, obecnie należy do Agencji Mienia Wojskowego. Bateria stanowi również dobry punkt widokowy i miejsce na zrobienie zdjęcia toruńskiej Starówce.",
        images,
        Coordinates
    )
}

export default BateriaDobrzynska