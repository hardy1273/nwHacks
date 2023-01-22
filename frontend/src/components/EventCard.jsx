import React from 'react'

//style="width: 18rem"
const EventCard = ({name, description, image}) => {
  return (
    <div class="card" style={{borderRadius:"5%"}} >
    <img class="card-img-top" src="https://static.toiimg.com/thumb/msid-95743162,width-1280,height-720,resizemode-4/.jpg" alt="Card image cap" style={{padding:"20px", borderRadius:"30px"}}/>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">More Info</a>
  </div>
</div>
    
  )
}

export default EventCard