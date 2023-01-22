import React, {useEffect, useState} from 'react'
import searchEvents from "./data"

function Search() {
  const [events, setEvents] = useState({a , b ,c });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (searchTerm !== '') {
      setLoading(true);
      //get query from backend 
      searchEvents(searchTerm)
        .then(events => {
            setEvents(events);
            setLoading(false);
        })
        .catch(err => console.log(err));

    } else {
      setEvents();
      setLoading(false);
    }
  }, [searchTerm])

  return (
    <div>
      {loading && <Spinner message="Searching for events"/>}
      {events?.length !== 0 && <CardLayout events={events} /> }
      {events?.length === 0 && searchTerm !== '' && !loading && (
        <div class="mt-10 text-center text-xl"> No Pins Found :( </div>
      )}
    </div>
  )
}

export default Search;