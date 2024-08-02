import React from 'react'

const Image = ({src, alt}) => {
  return (
    <img src={src} className="card-img-top" alt={alt}/>
  )
}

export default Image