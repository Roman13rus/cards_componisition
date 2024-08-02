import React from 'react'

const CardsBody = ({title, cardText}) => {
  return (
    <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{cardText}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
  )
}

export default CardsBody