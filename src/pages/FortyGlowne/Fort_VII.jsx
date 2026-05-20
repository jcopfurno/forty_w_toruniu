import fortImage1 from "../../images/Fort_VII_1.jpg"
import fortImage2 from "../../images/Fort_VII_2.jpg"
import fortImage3 from "../../images/Fort_VII_3.jpg"

function Fort_VII () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Fort VII "Tadeusz Kościuszko</h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Fort VII Tadeusz Kościuszko (wcześniej Fort IV Friedrich der Grosse) Fort altyleryjski zbudowany w latach 1879-1883 na planie pięciokąta. W latach 90 XIX wieku przeszedł modernizację, w wyniku której stał się odporny na ogień z dział kalibru 150 mm. Fort VII był głównym fortem zachodniego odcinka obrony miasta Torunia. W 1920 w obiekcie urządzono szpital weneryczny, zaś w latach 1939-1940 hitlerowscy okupanci urządzili w forcie więzienie Gestapo. (Stąd też miejsce pamięci przy lewej kaponierze). Obecnie część fortu użytkuje prywatna firma. Pozostała część jest opuszczona. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default Fort_VII