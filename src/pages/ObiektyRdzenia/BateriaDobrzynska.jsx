import fortImage1 from "../../images/BateriaDobrzynska_1.jpg"
import fortImage2 from "../../images/BateriaDobrzynska_2.jpg"
import fortImage3 from "../../images/BateriaDobrzynska_3.jpg"
import fortImage4 from "../../images/BateriaDobrzynska_4.jpg"

function BateriaDobrzynska () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Bateria Dobrzynska </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Dwa schrony (podwalniowy, w którym mieściło się laboratorium, w którym przygotowywano ładunki i pogotowia, zabezpieczający załogę przed ostrzałem) pozostałe po oddanej do użytku w 1886 roku Baterii Dobrzyńskiej. Bateria przeznaczona na działa RK (Ring-Kanone) 15 cm miała za zadanie prowadzić ostrzał linii kolejowej biegnącej w kierunku Iławy. Obiekt używany był przez wojsko jeszcze w czasach PRL, obecnie należy do Agencji Mienia Wojskowego. Bateria stanowi również dobry punkt widokowy i miejsce na zrobienie zdjęcia toruńskiej Starówce. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
                <img class="FortImage" src={fortImage4}></img>
            </div>
        </>
    )
}

export default BateriaDobrzynska