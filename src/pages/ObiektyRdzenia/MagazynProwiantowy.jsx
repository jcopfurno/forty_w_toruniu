import fortImage1 from "../../images/MagazynProwiantowy_1.jpg"
import fortImage2 from "../../images/MagazynProwiantowy_2.jpg"
import fortImage3 from "../../images/MagazynProwiantowy_3.jpg"

function MagazynProwiantowy () {
    return (
        <>
            <div>
                <h1 className="h1Text"> Magazyn Prowiantowy </h1>

                <img class="FortImage" src={fortImage1}></img>

                <p className="pText"> Miejsce, które większość torunian kojarzy jako Centrum Handlowe "Twierdza" to magazyn prowiantowy Twierdzy Toruń wraz z piekarnią i składem furażu(paszy dla koni). Kompleks został wzniesiony w latach 1887-92 na miejscu dawnego cmentarza garnizonowego jako największy w mieście magazyn żywności. W jego skład wchodziła piekarnia, wytwórnia suchego lodu, magazyn prowiantowy i skład furażu. Obecnie jest to jeden z lepiej wykorzystanych obiektów Twierdzy Toruń w skali całego miasta. </p>
            
                <img class="FortImage" src={fortImage2}></img>
                <img class="FortImage" src={fortImage3}></img>
            </div>
        </>
    )
}

export default MagazynProwiantowy