import React from 'react'

const Card = ({image,title,desc}) => {
    return (
      <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={image} /></div>
        <div class="card_content">
          <h2 class="card_title">{title}</h2>
          <p class="card_text">{desc}</p>
        </div>
      </div>
    </li>
    )
}

export default Card
