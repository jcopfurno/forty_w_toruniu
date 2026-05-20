import fortImage1 from "../../images/Fort_IV_1.jpg"
import fortImage2 from "../../images/Fort_IV_2.jpg"
import fortImage3 from "../../images/Fort_IV_3.jpg"

function Fort_IV () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Fort IV "Stanisław Żółkiewski </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Fort IV wzniesiono w latach 1878-1884 na planie pięciokąta jako Fort II. Przeznaczony był dla dwóch kompanii piechoty i obsługi dział (razem około 800 osób). Fort przechodził szereg zmian i modernizacji : w latach 1883-1884 zredukowano pozycje artyleryjskie na wałach, a artylerię wyprowadzono na baterie skrzydłowe, w latach 1889-1883 rozebrano kaponierę czołową i zastąpiono kojcem przeciwskarpowym, a w 1914 roku fort przeszedł rozbudowę mobilizacyjną, w ramach której zamurowano część okien i wprowadzono labiryntowe wejścia do schronów. Obiekt został wyposażony w dwa stanowiska obserwacyjne piechoty W.T. 90 oraz jedno pancerne stanowisko obserwacyjne P.Bst. 87. W roku 1920 fort przejęło Wojsko Polskie i w 1921 roku nadano mu nowego patrona, którym został hetman Stanisław Żółkiewski. W latach 60 i 70 umiejscowiono w nim zakład uprawy pieczarek, a obecnie Fort IV pełni rolę muzeum i jest przystosowany do usług turystycznych. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default Fort_IV