import React from 'react'
import EventCard from './EventCard'
import { Card } from "react-bootstrap";

const CardLayout = () => {

  const events = [
    {name:"American football",description: "L football real one should be football but i am in canada" ,image: "frontend/src/assets/03-nfl-son-mel.jpeg"},
    {name:"Basketball",description: "usa sport" ,image: "frontend/src/assets/b55a547893cb94c2aa06b09393848a5f.jpeg"},
    {name:"Football",description: "the beautiful game, messi GOAT " ,image: "frontend/src/assets/https___cdn.cnn.com_cnnnext_dam_assets_221126143352-weston-mckennie.jpg"},
  ]
  return (
    <div class="container flex flex-row text-center">
    <div class="row flex flex-row">
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
    </div>
  </div>   
  )
}

export default CardLayout