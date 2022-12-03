import React, {useState} from "react";

// import {Link} from "react-router-dom";
import axios from "axios"
import './App.css';


function App() {

  const [photo,setPhoto]=useState("");
  const [result,setResult]=useState([])

  const changePhoto=()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=QUhTu9O_C5sLeL83EZDgU-dVtJ-cYmwLkY6ABBqhyeM`)
       .then((response)=>{
         setResult(response.data.results)
       })
  }
  return (
    <div className="app">
      <div className="top">
       <h2 className="top1">React Photo Search</h2>
       <button className="btn1">Bookmark</button>
       {/* <link className="" to="/bookmarks"> Bookmarks</link> */}
      
      </div>
      

      <div>
        <input type="text" className="form-control" placeholder="search" value={photo} onChange={(e)=>{
          setPhoto(e.target.value)}} />
        <button type="submit" onClick={changePhoto} className="btn2">Submit</button>
      </div>

      <div className="container">
        <div>
          {result.map((value)=>{
            return(
              <div>
                <img className="img" src={value.urls.small} alt=" "/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
