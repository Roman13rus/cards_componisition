import React from 'react'
import Image from './Image'
import CardsBody from './cardsBody'

const Сards = () => {
    const cardData = {
        src: 'https://avatars.mds.yandex.net/i?id=421ab66a227f4e06b97ea4d345d1909e05523886b96b3786-11931026-images-thumbs&n=13',
        alt: 'Forest',
        title: 'Card title',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }

    const isImage = (cardData) => {
        if (cardData.src) {
            return (
                <Image src={cardData.src} alt={cardData.alt}/>
            )
        }
    }
  return (
    <div className="card" style={{"width": "18rem"}}>
        {isImage(cardData)}
        <CardsBody 
        title={cardData.title} 
        cardText={cardData.cardText}/>
    </div>
    
  )
}

export default Сards