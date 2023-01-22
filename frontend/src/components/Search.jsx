import React, {useEffect, useState} from 'react'

function Search() {
  const [events, setEvents] = useState([a, b ,c]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (searchTerm !== '') {
      setLoading(true);
      //get query from backend 
      const query="football";

    } else {
      setEvents();
      setLoading(false);
    }
  }, [searchTerm])

  return (
    <div>
      {loading && <Spinner message="Searching for events"/>}
      {events?.length !== 0 && <CardLayout events={events} /> }
      {events?.length === 0 && searchTerm !== '' && !loadig && (
        <div class="mt-10 text-center text-xl"> No Pins Found :( </div>
      )}
    </div>
  )
}

export default Search;