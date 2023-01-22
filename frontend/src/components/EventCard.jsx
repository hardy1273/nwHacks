import React from 'react'


//style="width: 18rem"
const EventCard = ({name, description, image}) => {
  return (
    <div class="card" style={{borderRadius: "5%"}} >
    <img class="card-img-top" src="https://img.olympicchannel.com/images/image/private/f_auto/t_s_pog_staticContent_hero_xl_2x/primary/ydk9vatpnihwfquy6zq3" alt="Card image cap" style={{padding: "20px", borderRadius: "30px" }} />
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">More Info</a>
  </div>
</div>
    
  )
}

export default EventCard