import FortPage from "@/components/FortPage"
import fortImage1 from "../../images/Fort_XIV_1.jpg"
import fortImage2 from "../../images/Fort_XIV_2.jpg"
import fortImage3 from "../../images/Fort_XIV_3.jpg"
import fortImage4 from "../../images/Fort_XIV_4.jpg"

/*52.990691675626124, 18.63820257714307*/
function Fort_XIV () {
    const Coordinates = {
        latitude: 52.990691675626124,
        longitude: 18.63820257714307
    }
    const images = [fortImage1, fortImage2, fortImage3, fortImage4]
    return FortPage(
        "Fort XIV \"Józef Bem\"",
        "1889-1893",
        "Fort XIV \"Józef Bem\" (wcześniej Józef Dwernicki) wzniesiono w latach 1889-1893 jako Fort VI a Hermann Balk. Jest on otoczony 36-metrową mokrą fosą, a jedyne przejście do jego wnętrza wiedzie przez groblę i most zwodzony. W centrum fortu mieści się jednokondygnacyjny blok koszarowy. W 1893 roku zamontowano w nim dwie wieżyczki obserwacyjne W.T. 90. Załogę obiektu stanowiło 300 pruskich żołnierzy. Podczas wojny polsko - bolszewickiej w Forcie XIV przetrzymywano jeńców rosyjskich pilnowanych przez polską kompanię wartowniczą. W czasie II wojny światowej fort stał się częścią Stalagu XX A (mieścił się tam szpital, w którym odbywały się zaawansowane zabiegi). Po wojnie obiekt przejęło wojsko i urządziło tam magazyny. Obecnie Fort XIV znajduje się w prywatnych rękach, a raz do roku odbywają się na nim Toruńskie Manewry Ratownicze.",
        images,
        Coordinates
    )
}

export default Fort_XIV