import React from 'react'
import { useParams } from 'react-router-dom'


function ServiceDetails() {
    let { id } = useParams()
  return (
      <div className='content'>
          
          <h1>Service Details </h1>
          
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum error cumque quod quibusdam? Provident totam fugit officia deserunt tenetur. A laudantium suscipit optio enim cum. Tempore eaque, temporibus aperiam eius expedita, voluptatem blanditiis beatae magnam, ut non vel atque magni libero amet minus dolor doloremque. Incidunt quo commodi consequatur.
          </p>
          


    </div>
  )
}

export default ServiceDetails