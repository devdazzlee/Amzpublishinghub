import React from 'react'
import Form from '../Form/Form';
import img1 from '../../Assets/Images/banner-slider-1.webp';
import img2 from '../../Assets/Images/banner-slider-2.webp';
import img3 from '../../Assets/Images/banner-slider-3.webp';
import img4 from '../../Assets/Images/banner-slider-4.webp';
import img5 from '../../Assets/Images/banner-slider-5.webp';
import './CoverList.css'


const Cover_List = () => {
  return (
    <div className='imagecardparent flex mt-12 justify-center pb-12'>
        <img className='img1-card' src={img1} alt="" />
        <img className='img1-card' src={img2} alt="" />
        <img className='img1-card' src={img3} alt="" />
        <img className='img1-card' src={img4} alt="" />
        <img className='img1-card' src={img5} alt="" />
      </div>
  )
}

export default Cover_List