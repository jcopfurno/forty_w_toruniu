import fortImage1 from "../../images/BateriaDobrzynska_1.jpg"
import fortImage2 from "../../images/BateriaDobrzynska_2.jpg"
import fortImage3 from "../../images/BateriaDobrzynska_3.jpg"
import fortImage4 from "../../images/BateriaDobrzynska_4.jpg"

function BateriaDobrzynska () {
    return (
        <>
            <div className="fortContainer">
                <div className="sidebar"></div>
                <div className="content">
                <div className="heroSection">   
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Bateria Dobrzyńska </h1>
                        <p className="pHeroText"> Lata budowy: 1889-1892 </p>
                    </div>
                </div>

                <p className="pText"> Dwa schrony (podwalniowy, w którym mieściło się laboratorium, w którym przygotowywano ładunki i pogotowia, zabezpieczający załogę przed ostrzałem) pozostałe po oddanej do użytku w 1886 roku Baterii Dobrzyńskiej. Bateria przeznaczona na działa RK (Ring-Kanone) 15 cm miała za zadanie prowadzić ostrzał linii kolejowej biegnącej w kierunku Iławy. Obiekt używany był przez wojsko jeszcze w czasach PRL, obecnie należy do Agencji Mienia Wojskowego. Bateria stanowi również dobry punkt widokowy i miejsce na zrobienie zdjęcia toruńskiej Starówce. </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                    <img src={fortImage4}></img>
                </div>
                </div>
                <div className="sidebar"></div>
            </div>
        </>
    )
}

export default BateriaDobrzynska