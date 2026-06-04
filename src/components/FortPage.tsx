import { FortMap } from "@/components/FortMap"
import { ImageSlider } from "@/components/ImageSlider"

function FortPage (
    title: string, 
    constructionYears: string, 
    description: string, 
    images: string[], 
    coordinates: {latitude: number, longitude: number}
    ) {
    return (
        <>
        <div className="content">
            <div className="heroSection">
                <h1 className="h1Text"> {title} </h1>
                <p className="pHeroText"> Lata budowy: {constructionYears} </p>
            </div>  
            <div className="mainSection">
                <div className="Gallery">
                    <ImageSlider images={images}/>
                </div>
                <p> {description} </p>
            </div>
            <div className="mapSection">
                {FortMap(coordinates)}
            </div>
        </div>
        </>
    )
}

export default FortPage