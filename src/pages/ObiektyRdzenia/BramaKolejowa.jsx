import fortImage1 from "../../images/BramaKolejowa_1.jpg"
import fortImage2 from "../../images/BramaKolejowa_2.jpg"

function BramaKolejowa () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Brama Kolejowa </h1>
                        <p> Lata budowy: 1884-1886 </p>
                    </div>
                </div>

                <p className="pText"> Wzniesiona w latach 1884-1886 Brama Kolejowa została przeprowadzona przez wał łączący Bastion IV z Fortem św. Jakuba. Jest to jedyna zachowana (i ciągle używana brama) Twierdzy Toruń. W bramie mieści się również obecnie zamknięty i niedostępny blokhauz, z którego można było ostrzeliwać tory. </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                </div>
            </div>
        </>
    )
}

export default BramaKolejowa