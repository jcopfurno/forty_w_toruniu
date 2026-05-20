import fortImage1 from "../../images/BastionI_1.jpg"
import fortImage2 from "../../images/BastionI_2.jpg"
import fortImage3 from "../../images/BastionI_3.jpg"

function BastionI () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Bastion I "Nowy"</h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Bastion I "Menniczy" powstał w latach 1629-1631. W początkowej formie był tylko zespołem wałów ziemnych. Przechodził modernizacje w latach 1656,1702-1703 i przez cały wiek XIX. Na terenie Bastionu można znaleźć pozostałości pruskich fortyfikacji : prochownię wojenną, składnicę saperską oraz schron, wybudowany w 1890 roku. Można tam wejść za zgodą właściciela obiektu. </p>
           
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default BastionI