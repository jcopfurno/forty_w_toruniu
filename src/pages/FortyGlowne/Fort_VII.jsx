import fortImage1 from "../../images/Fort_VII_1.jpg"
import fortImage2 from "../../images/Fort_VII_2.jpg"
import fortImage3 from "../../images/Fort_VII_3.jpg"

function Fort_VII () {
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
                        <h1 className="h1Text"> Fort VII "Tadeusz Kościuszko" </h1>
                        <p className="pHeroText"> Lata budowy: 1879-1883 </p>
                    </div>
                </div>

                <p className="pText"> Fort VII Tadeusz Kościuszko (wcześniej Fort IV Friedrich der Grosse) Fort altyleryjski zbudowany w latach 1879-1883 na planie pięciokąta. W latach 90 XIX wieku przeszedł modernizację, w wyniku której stał się odporny na ogień z dział kalibru 150 mm. Fort VII był głównym fortem zachodniego odcinka obrony miasta Torunia. W 1920 w obiekcie urządzono szpital weneryczny, zaś w latach 1939-1940 hitlerowscy okupanci urządzili w forcie więzienie Gestapo. (Stąd też miejsce pamięci przy lewej kaponierze). Obecnie część fortu użytkuje prywatna firma. Pozostała część jest opuszczona. </p>
            
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

export default Fort_VII