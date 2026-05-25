import fortImage1 from "../../images/Fort_VIII_1.jpg"
import fortImage2 from "../../images/Fort_VIII_2.jpg"
import fortImage3 from "../../images/Fort_VIII_3.jpg"

function Fort_VIII () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Fort VIII "Kazimierz Wielki" </h1>
                        <p> Lata budowy: 1888-1890 </p>
                    </div>
                </div>

                <p className="pText"> Fort VIII "Kazimierz Wielki" Fort VIII (pierwotnie Fort IVb Herzog Albrecht) został wybudowany w latach 1888-1890 na planie trapezu. Obiekt przeznaczony był dla około 300-osobowej załogi i wyposażony w 3 stanowiska obserwacyjne piechoty W.T. 90 (to tutaj mieści się najwyższe tego typu stanowisko w Toruniu). Za czasów II RP pełnił funkcję koszar. W okresie II wojny światowej zapisano najciemniejszą kartę w jego historii: to tutaj więziono ludzi rozstrzeliwanych później na Barbarce, a 91 więźniów wywieziono do obozu koncentracyjnego w Sachsenhausen. W późniejszym okresie wojny "Kazimierz" pełnił rolę magazynu Luftwaffe. Dziś Fort VIII stoi pozostawiony na pastwę losu, choć miłośnicy fortyfikacji regularnie podejmują starania na rzecz poprawienia jego stanu (latem 2015 roku udrożniona została fosa i śluza fortu). </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
        </>
    )
}

export default Fort_VIII