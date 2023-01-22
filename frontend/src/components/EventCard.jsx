import React from 'react'

const EventCard = ({name, description,image}) => {
  return (
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src={image} alt="Card image cap"></img>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">More Info</a>
  </div>
</div>
    
  )
}

export default EventCard