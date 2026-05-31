import fortImage1 from "../../images/Fort_I_1.jpg"
import fortImage2 from "../../images/Fort_I_2.jpg"
import fortImage3 from "../../images/Fort_I_3.jpg"

function Fort_I () {
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
                        <h1 className="h1Text"> Fort I "Jan III Sobieski" </h1>
                        <p className="pHeroText"> Lata budowy: 1888-1894 </p>
                    </div>
                </div>

                <p className="pText"> Fort I "Jan III Sobieski" Fort I "Jan III Sobieski" (pierwotnie Ia Buchtafort) to najmłodszy i zarazem najnowocześniejszy z toruńskich fortów. Jest to jedyny fort pancerny na wschodnim froncie Cesarstwa Niemieckiego. "Sobieski" uzbrojony jest w 4 wieże pancerne typu H.P.T. 90, dwa pancerne stanowiska obserwacyjne piechoty W.T. 90 i dwa pancerne stanowiska obserwacyjne artylerii P.BSt. 87. Obiekt mógł pomieścić mógł około 371 osób (żołnierze piechoty, artylerzyści, saperzy i kadra oficerska), a części koszarowej broniła dobrze widoczna kaponiera szyjowa. Buchtafort jako jedyny obiekt Twierdzy Toruń otworzył ogień w sierpniu 1914 choć to co załoga fortu wzięła za jednostki wroga okazało się być stodołą Bogu ducha winnego mieszkańca wsi Kaszczorek. W czasach II Rzeczpospolitej obiekt zaadaptowano na magazyn i pomieszczenia gospodarcze. Do 1956 r. Fort I należał do wojska, a w latach 1960-91 mieściło się w nim przedsiębiorstwo zajmujące się wyrobem win. Obecnie znajduję się w rękach miasta. </p>
            
                <div className="Gallery"> 
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
        </>
    )
}

export default Fort_I