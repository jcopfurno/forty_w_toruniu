import { useState } from "react"
import './Gallery.css'

type GalleryProps = {
    images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
    const [slideIndex, setSlideIndex] = useState(0)

    const setPrev = () => {
        if (slideIndex === 0) {
            setSlideIndex(images.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const setNext = () => {
        if (slideIndex === images.length - 1) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    return (
        <>
            <div className="slider">
                <a className="arrowSlider leftArrowSlider" onClick={setPrev}> &#10094; </a>

                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image} 
                        alt={`Loading image`} 
                        className={index === slideIndex ? "slide slideActive" : "slide slideInactive"}
                    />
                ))}

                <a className="arrowSlider rightArrowSlider" onClick={setNext}> &#10095; </a>

                <div className="dotsContainer">
                    {images.map((image, index) => (
                        <div className={index === slideIndex ? "dot dotActive" : "dot dotInactive"} onClick={() => setSlideIndex(index)} key={index}>  </div>
                    ))}
                </div>
            </div>
        </>
    )
}