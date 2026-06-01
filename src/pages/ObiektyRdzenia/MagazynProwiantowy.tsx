import { fortMap } from "@/components/fortMap"
import fortImage1 from "../../images/MagazynProwiantowy_1.jpg"
import fortImage2 from "../../images/MagazynProwiantowy_2.jpg"
import fortImage3 from "../../images/MagazynProwiantowy_3.jpg"

/*53.01286970631307, 18.606809122306334*/
function MagazynProwiantowy () {
    const Coordinates = {
        latitude: 53.01286970631307,
        longitude: 18.606809122306334
    }
    return (
        <>
        <div className="content">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <img src={fortImage1}></img>
                </div>

                <div className="heroTextContainer">
                    <h1 className="h1Text"> Magazyn Prowiantowy </h1>
                    <p className="pHeroText"> Lata budowy: 1887-1892 </p>
                </div>
            </div>

            <p className="pText"> Miejsce, które większość torunian kojarzy jako Centrum Handlowe "Twierdza" to magazyn prowiantowy Twierdzy Toruń wraz z piekarnią i składem furażu(paszy dla koni). Kompleks został wzniesiony w latach 1887-1892 na miejscu dawnego cmentarza garnizonowego jako największy w mieście magazyn żywności. W jego skład wchodziła piekarnia, wytwórnia suchego lodu, magazyn prowiantowy i skład furażu. Obecnie jest to jeden z lepiej wykorzystanych obiektów Twierdzy Toruń w skali całego miasta. </p>
        
            <div className="Gallery">
                <img src={fortImage2}></img>
                <img src={fortImage3}></img>
            </div>
            <div className="mapSection">
                {fortMap(Coordinates)}
            </div>
        </div>
        </>
    )
}

export default MagazynProwiantowy