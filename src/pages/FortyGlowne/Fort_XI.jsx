import fortImage1 from "../../images/Fort_XI_1.jpg"
import fortImage2 from "../../images/Fort_XI_2.jpg"
import fortImage3 from "../../images/Fort_XI_3.jpg"
import fortImage4 from "../../images/Fort_XI_4.jpg"

function Fort_XI () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Fort XI "Stefan Batory" </h1>
                        <p> Lata budowy: 1877-1884 </p>
                    </div>
                </div>

                <p className="pText"> Fort XI Twierdzy Toruń został zbudowany w latach 1877-1884 na planie pięciokąta. W Forcie otoczonym suchą fosą stacjonowała załoga złożona z 650 altylerzystów i jednego batalionu piechoty. Gdy niemiecka załoga opuszczała obiekt zabrała ze sobą większość wyposażenia fortu i zniszczyła kable telefoniczne i telegraficzne. Podczas II Wojny Światowej byli tam przetrzymywani jeńcy brytyjscy, którzy przymusowo rozbudowywali dworzec Toruń Kluczyki. Do dziś w pomieszczeniach kaponiery czołowej można podziwiać pozostawione przez nich napisy. W 1999 roku w Forcie znaleziono 3 skrzynie z niemiecką amunicją wraz z karabinami snajperskimi. </p>
            
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                    <img src={fortImage4}></img>
                </div>
            </div>
        </>
    )
}

export default Fort_XI