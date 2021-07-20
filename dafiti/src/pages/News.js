import React from "react";
import "./News.css";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";

async function searchNews(q) {
  
  q = encodeURIComponent(q);
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "03634f8acbmsh27ea67c3de5b74fp1ccdbbjsn12da5335f9ad",
        "x-bingapis-sdk": "true",
      },
    }
  );
  const body = await response.json();
  console.log(body);
  const info = body["value"];
  console.log(info);
  return info;
}

function App() {
  //const [query, setQuery] = React.useState("");
  const [list, setList] = React.useState(null);

  // const search = (e) => {
  //   e.preventDefault();
  //   searchNews(query).then(setList);
  // };

  function okay(some) {
    searchNews(some).then(setList);
  }
  

  return (
    <div className="app">
      <div>
        <button
          style={{backgroundColor:"#ffaa00", color:"black", padding: "30px", fontSize:"25px", borderRadius: "25px"}}
          className="trending"
          onClick={() => {
            okay("covid");
          }}
        >
          <h3>Load My News</h3>
          
        </button>
        <button
        style={{backgroundColor:"#ff5c8a", color:"black", padding: "30px", fontSize:"25px", borderRadius: "25px"}}
          className="trending"
          onClick={() => {
            okay("sports");
          }}
        >
          <h3>Sports</h3>
        </button>
        <button
          style={{backgroundColor:"#ffaa00", color:"black", padding: "30px", fontSize:"25px", borderRadius: "25px"}}
          className="trending"
          onClick={() => {
            okay("cricket");
          }}
        >
          <h3>Cricket</h3>
        </button>
        <button
        style={{backgroundColor:"#ff5c8a", color:"black", padding: "30px", fontSize:"25px", borderRadius: "25px"}}
          className="trending"
          onClick={() => {
            okay("football");
          }}
        >
          <h3>FootBall</h3>
        </button>
      </div>

      {!list ? null : list.length === 0 ? (
        <p>
          <i>No results</i>
        </p>
      ) : (
        <div style={{paddingLeft:"50px"}}>
          <Grid container spacing={10}>
            {list.map((item, i) => (
              <Grid item key={i}  style={{borderRadius: "50px"}}>
                <Cards key={i} item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default App;
