import React from 'react'
import "./middleimg.css"
// import Slider from "react-slick";


function Middleimg() {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <div>


        <div className='middle-img'>

        {/* <Slider {...settings}> */}

        <div className='middle-left'>
            <img className='img1'  src="../assets/mid1.png" alt="" />
</div> 

{/* <div className='middle-left'>
            <img className='img1'  src="../assets/mid2.png" alt="" />
</div>  */}

{/* </Slider> */}


<div className='middle-right'>
<img className='img2' src="../assets/mid3.png" alt="" />

            
</div>


        </div>

    </div>
  )
}

export default Middleimg
