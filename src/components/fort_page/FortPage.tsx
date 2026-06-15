import { FortMap } from "@/components/map/FortMap"
import { Gallery } from "@/components/gallery/Gallery"
import "./FortPage.css" 

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
                <h1 className="title"> {title} </h1>
                <p className="heroDescription"> Lata budowy: {constructionYears} </p>
            </div>  
            <div className="mainSection">
                <div className="Gallery">
                    <Gallery images={images}/>
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