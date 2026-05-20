import fortImage1 from "../../images/BramaKolejowa_1.jpg"
import fortImage2 from "../../images/BramaKolejowa_2.jpg"

function BramaKolejowa () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Brama Kolejowa </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Wzniesiona w latach 1884-1886 Brama Kolejowa została przeprowadzona przez wał łączący Bastion IV z Fortem św. Jakuba. Jest to jedyna zachowana (i ciągle używana brama) Twierdzy Toruń. W bramie mieści się również obecnie zamknięty i niedostępny blokhauz, z którego można było ostrzeliwać tory. </p>
            
                <img class="FortImage" src={fortImage2}></img>
            </div>
        </>
    )
}

export default BramaKolejowa