import FortPage from "@/components/fort_page/FortPage"
import fortImage1 from "../../images/MagazynProwiantowy_1.jpg"
import fortImage2 from "../../images/MagazynProwiantowy_2.jpg"
import fortImage3 from "../../images/MagazynProwiantowy_3.jpg"

/*53.01286970631307, 18.606809122306334*/
function MagazynProwiantowy () {
    const Coordinates = {
        latitude: 53.01286970631307,
        longitude: 18.606809122306334
    }
    const images = [fortImage1, fortImage2, fortImage3]
    return FortPage(
        "Magazyn Prowiantowy",
        "1887-1892",
        "Miejsce, które większość torunian kojarzy jako Centrum Handlowe \"Twierdza\" to magazyn prowiantowy Twierdzy Toruń wraz z piekarnią i składem furażu(paszy dla koni). Kompleks został wzniesiony w latach 1887-1892 na miejscu dawnego cmentarza garnizonowego jako największy w mieście magazyn żywności. W jego skład wchodziła piekarnia, wytwórnia suchego lodu, magazyn prowiantowy i skład furażu. Obecnie jest to jeden z lepiej wykorzystanych obiektów Twierdzy Toruń w skali całego miasta.",
        images,
        Coordinates
    )
}

export default MagazynProwiantowy