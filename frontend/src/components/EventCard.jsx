import React from 'react'
import Link from 'next/link';



//style="width: 18rem"
const EventCard = ({name, description, image}) => {
  return (
    <Link href= "/"> 
    <div class="card" style={{borderRadius:"5%",textDecoration:"none"}} >
    <img class="card-img-top" src="https://static.toiimg.com/thumb/msid-95743162,width-1280,height-720,resizemode-4/.jpg" alt="Card image cap" style={{padding:"20px", borderRadius:"30px"}}/>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    {/* <Link href="/" class="btn btn-primary center" style={{backgroundColor:"#BFD7FF", border:"none"}}>About</Link> */}
  </div>
</div>
    </Link>  

  )
}


export default EventCard