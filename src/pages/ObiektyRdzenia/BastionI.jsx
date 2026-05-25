import fortImage1 from "../../images/BastionI_1.jpg"
import fortImage2 from "../../images/BastionI_2.jpg"
import fortImage3 from "../../images/BastionI_3.jpg"

function BastionI () {
    return (
        <>
            <div className="fortContainer">
                <div className="heroSection">
                    <div className="heroImageContainer">
                        <img src={fortImage1}></img>
                    </div>

                    <div className="heroTextContainer">
                        <h1 className="h1Text"> Bastion I "Nowy" </h1>
                        <p> Lata budowy: 1629-1631 </p>
                    </div>
                </div>

                <p className="pText"> Bastion I "Menniczy" powstał w latach 1629-1631. W początkowej formie był tylko zespołem wałów ziemnych. Przechodził modernizacje w latach 1656,1702-1703 i przez cały wiek XIX. Na terenie Bastionu można znaleźć pozostałości pruskich fortyfikacji : prochownię wojenną, składnicę saperską oraz schron, wybudowany w 1890 roku. Można tam wejść za zgodą właściciela obiektu. </p>
           
                <div className="Gallery">
                    <img src={fortImage2}></img>
                    <img src={fortImage3}></img>
                </div>
            </div>
        </>
    )
}

export default BastionI