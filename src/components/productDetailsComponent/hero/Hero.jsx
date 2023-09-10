import React, { useEffect } from 'react'
import Image1 from '../../../assets/c3.webp'
import Image2 from '../../../assets/c4.webp'
import Image3 from '../../../assets/c5.webp'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
    <motion.div id="carouselExampleControls" className="carousel slide mb-3" data-bs-ride="carousel"
    initial={{y:200, opacity:0}}
    animate={{y:0, opacity:1}}
    >
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Image1} alt='alt' className="d-block w-100" />
            </div>
            <div className="carousel-item">
                <img src={Image2} alt='alt' className="d-block w-100" />
            </div>
            <div className="carousel-item">
                <img src={Image3} alt='alt' className="d-block w-100" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </motion.div>
</>
  )
}

export default Hero