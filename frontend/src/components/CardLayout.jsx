import React from 'react'
import EventCard from './EventCard'


const CardLayout = () => {

  const events = [
    {name:"American football",description: "L football real one should be football but i am in canada" ,image: "frontend/src/assets/03-nfl-son-mel.jpeg"},
    {name:"Basketball",description: "usa sport" ,image: "frontend/src/assets/b55a547893cb94c2aa06b09393848a5f.jpeg"},
    {name:"Football",description: "the beautiful game, messi GOAT " ,image: "frontend/src/assets/https___cdn.cnn.com_cnnnext_dam_assets_221126143352-weston-mckennie.jpg"},
  ]
  return (
    <div class="container flex flex-row text-center">
    <div class="row row-cols-3">
      {events?.map((event) => 
      <EventCard name={event.name} description={event.description} image="https://www.google.com/search?q=football&sxsrf=AJOqlzUp0lfIDHI8BicblPRtl_DwDWqppQ:1674350778886&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjzop7bgtr8AhWiADQIHYBVBxoQ_AUoAXoECAEQAw&biw=782&bih=753&dpr=2#imgrc=K6ZrAumEgnwqXM" />)}
    </div>
  </div>   
  )
}

export default CardLayout