import { useState } from "react"
import './ImageSlider.css'

type ImageSliderProps = {
    images: string[]
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
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
                <a className="leftArrowSlider" onClick={setPrev}> &#10094; </a>
                <img src={images[slideIndex]}></img>
                <a className="rightArrowSlider" onClick={setNext}> &#10095; </a>\

                <div className="dotsContainer">
                    {images.map((image, index) => (
                        <div className={index === slideIndex ? "dot-active" : "dot"} onClick={() => setSlideIndex(index)} key={index}>  </div>
                    ))}
                </div>
            </div>
        </>
    )
}