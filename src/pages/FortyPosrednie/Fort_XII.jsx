import fortImage1 from "../../images/Fort_XII_1.jpg"
import fortImage2 from "../../images/Fort_XII_2.jpg"
import fortImage3 from "../../images/Fort_XII_3.jpg"

function Fort_XII () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Fort XII "Władysław Jagiełło" </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Fort XII Władysław Jagiełło (dawniej Va Urlich von Jungingen) został wzniesiony w latach 1890-1893 na planie trapezu i pełnił rolę fortu pośredniego wzmacniającego południową linię obrony Twierdzy Toruń. Fort posiadał jedno (doświadczalne) stanowisko na armaty kalibru 10 cm i dwa tradytory. W 1920 roku opuszczające obiekt wojska niemieckie zabrały ze sobą instalacje: telefoniczną i telegraficzną oraz niektóre elementy wyposażenia. W 1942 roku więziono tu jeńców przewożonych potem do obozu na Glinkach. Obecnie Fort jest całkowicie opuszczony i zamieszkany przez bezdomnych.  </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default Fort_XII