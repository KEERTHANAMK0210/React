import React from 'react'
import { Carousel } from 'react-bootstrap'

function ImageCarousels() {
    const a=[{image:"https://media.istockphoto.com/id/1443384686/photo/man-walking-in-crowds-of-people.jpg?s=612x612&w=0&k=20&c=I_lXFGeHaVBKy5zClsZWWBwkoz_E3PcL2MShsSnk2_c="},
    {image:"https://media.istockphoto.com/id/1257800287/photo/high-mineral-content-wetland.jpg?s=612x612&w=0&k=20&c=K14GjcyiuS3hpmDnU8Uw1YsW_fzOTHGWoSfY-riTBkA="}
    ,{image:"https://media.istockphoto.com/id/1449841931/photo/aerial-view-of-dalyan-delta.jpg?s=612x612&w=0&k=20&c=Unt5izF6GlAXOGIy21E8Y0HN-Q2n5rDSbPGgx7DdASU="}]
    
    return (
        
    <div>
      <Carousel>
        {a.map((ab)=>{return(
      <Carousel.Item>
        <img src={ab.image}
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        )})}
      
    </Carousel>
    </div>
  )
}

export default ImageCarousels
