import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const api_key = "AIzaSyBxhNN4LbDbbzvEAaSuGpBxdFjfeSWz_QU"

  const [restaurantsData, setRestaurantsData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleBtnClick = async () => {
    try {
      const result = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=${searchInput}&key=${api_key}`, 
      {
        headers:{'Access-Control-Allow-Origin': '*'},
      },
     )
      setRestaurantsData(result)
      // if(typeof (Storage) !== undefined){
      //   localStorage.setItem("result", result)
      // }
    }
    catch(err) {
      console.log(err)
    }
  }

  console.log(restaurantsData);
  console.log(searchInput);

  return (
    <div className="App">
      <input value={searchInput} type="text" name="searchInput" onChange={(event) => setSearchInput(event.target.value)}></input>
      <button className="search" onClick={() => handleBtnClick()}>Search</button>
      <p>{restaurantsData}</p>
    </div>
  );
}

export default App;
