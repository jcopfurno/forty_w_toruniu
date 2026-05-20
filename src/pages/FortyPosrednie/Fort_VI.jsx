import fortImage1 from "../../images/Fort_VI_1.jpg"
import fortImage2 from "../../images/Fort_VI_2.jpg"
import fortImage3 from "../../images/Fort_VI_3.jpg"
import fortImage4 from "../../images/Fort_VI_4.jpg"

function Fort_VI () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Fort VI "Jaremi Wiśniowiecki" </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Fort VI "Jaremi Wiśniowiecki" (dawniej IIIa Dohna) został wzniesiony w latach 1889-1893 z cegły i betonu na planie pięciokąta jako część północnej linii umocnień miasta Torunia. W Forcie początkowo było miejsce na 6 dział i 300 żołnierzy. W latach 1911-1914 przeszedł częściową modernizację (między innymi zabetonowano okna w pomieszczeniach mieszkalnych oraz naprawiono wyjście na wał). W 1920 roku obiekt przejęło Wojsko Polskie i urządziło w nim magazyn saperski. Od 1999 roku mieści się w nim siedziba Bractwa Kurkowego. Zwiedzanie jest możliwe po wcześniejszym umówieniu.  </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
                <img class="FortImage" src={fortImage4}></img>
            </div>
        </>
    )
}

export default Fort_VI