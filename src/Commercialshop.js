import React from 'react'
import "./commercialshop.css"
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";





function Commercialshop() {
  const data=[
    { name:"Shop",city:"Cochin",amonunt:"Rs 11500/Month"},
    { name:"Property",city:"Chennai",amonunt:"Rs 12000/Month"},
    { name:"Commercial Store",city:"Banglore",amonunt:"Rs 9000/Month"},
    { name:"Outlet",city:"Hydrabad",amonunt:"Rs 16000/Month"},
    { name:"Store",city:"Noida",amonunt:"Rs 15000/Month"}
   ]
    

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };






  return (
    <div className='container'>

      <h1 className='commercial'>Commercial shop</h1>
      {/* <Slider {...settings}> */}

        <div className="card-layout">



          

          {data.map((props)=>(

            <div className='card-style'>








<Card className='card' style={{ width: '18rem'}}>
      <Card.Img className='cardImg' variant="top" src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/iELasWL1Bw54TQp0cIaPJRmjLesKXbIVdeX4dvYU.jpg" />
      <Card.Body>
        <Card.Title className='title1'>{props.name}</Card.Title>
        <Card.Title className='title2'>{props.city}</Card.Title>
        <Card.Title className='title3'>{props.amonunt}</Card.Title>



        <a className='explore' href="">Explore now</a>
      </Card.Body>
    </Card>


    </div>






          ))}




    </div>
    {/* </Slider> */}



    </div>
  )
}

export default Commercialshop
