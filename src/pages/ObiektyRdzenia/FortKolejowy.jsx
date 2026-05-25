import fortImage1 from "../../images/FortKolejowy_1.jpg"
import fortImage2 from "../../images/FortKolejowy_2.jpg"
import fortImage3 from "../../images/FortKolejowy_3.jpg"

function FortKolejowy () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Fort Kolejowy </h1>
                        <p> Lata budowy: 1863-1866 </p>
                    </div>
                </div>

                <p className="pText"> Fort Kolejowy (niem. Eisenbahnfort) został zbudowany w latach 1863-1866 na planie sześciokąta w celu obrony linii kolejowej i obecnego dworca Toruń Główny. W latach 1888-1889 fort został zmodernizowany(przykryto sklepieniami korpus kazamat i magazyn prochu). W latach 80 XIX wieku powstały na nim dwa stanowiska armat 15cm oraz zachowane do dziś 21cm. W czasach międzywojennych Fort Kolejowy pełnił rolę magazynu i koszar saperów rzecznych Flotylli Wiślanej. Podczas okupacji hitlerowskiej obiekt pełnił rolę aresztu dla jeńców Stalagu XXa. W latach 50 większość Fortu została rozebrana. Do dzisiaj zachowały się :magazyn prochu, część poterny głównej, fragmenty ściany wewnętrznej korytarza trawersu oraz stanowisko armaty 21cm. Ten niezwykle ciekawy zabytek obecnie stoi pusty, oddzielony od reszty miasta infrastrukturą kolejową. </p>

                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
        </>
    )
}

export default FortKolejowy