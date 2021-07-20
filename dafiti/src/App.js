import "./App.css";
import React from "react";
import Songs from "./pages/Songs";
import News from "./pages/News";
import useStyle from "./style";

import {Link} from 'react-scroll'

import Books from "./pages/Books";

function App() {
  const classes = useStyle();

  return (
    <div style={{backgroundColor: "#212529",backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize: "cover", backgroundImage:"url('https://i.pinimg.com/originals/ca/4f/ac/ca4facbd12cf396d6e332c0c756498b0.jpg')"}}>

      <div align="center" style={{backgroundColor: "#3c096c"}}>
        <h1 style={{color: "#eccaff", fontSize:"70px", padding: "20px"}}>Dafiti</h1>
      </div>

      <div style={{ height: "100px"}}>
        <ul style={{display:"flex",padding:"10px", listStyle: "none", marginBottom: "10px", paddingLeft: "30px"}}>
          <li style={{marginRight:"120px"}}>
            <Link style={{textDecoration: "none", color: "white", fontSize:"50px", fontStyle:"Roboto Black"}}
              to="news"
              duration={1000}
              smooth={true}>
                <p >News</p>
            </Link>
          </li>
          <li style={{marginRight:"120px"}}>
            <Link style={{textDecoration: "none", color: "white", fontSize:"50px", fontStyle:"Roboto Black"}}
              to="Books"
              duration={1000}
              smooth={true}>
                <p >Books</p>
            </Link></li>
          <li style={{marginRight:"120px"}}>
          <Link style={{textDecoration: "none", color: "white", fontSize:"50px", fontStyle:"Roboto Black"}}
              to="songs"
              duration={1000}
              smooth={true}>
                <p >Songs</p>
          </Link>
          </li>
          
        </ul>
      </div>


      
    


      <div align="center">
      <h1 id="news" align="center" style={{color: "white",textAlign: 'center', marginTop: "30px",padding: "30px",width: "300px",backgroundColor: "#6930c3", borderRadius: "25px"}}>News</h1>
      <News />
      </div>
      <div align="center">
      <h1 id="Books" align="center" style={{color: "white",textAlign: 'center',marginBottom: "40px", marginTop: "30px",padding: "30px",width: "300px",backgroundColor: "#6930c3", borderRadius: "25px"}}>Books</h1>
      <Books />
      </div>
      
      <div align="center">
      <h1 id="songs" align="center" style={{color: "white",textAlign: 'center', marginBottom: "30px",marginTop: "30px",padding: "30px",width: "300px",backgroundColor: "#6930c3", borderRadius: "25px"}}>Songs</h1>
      <Songs />
      </div>
      
    </div>
  );
}

export default App;
