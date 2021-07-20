import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from "axios";
import useStyles from "../style";
import Container from "@material-ui/core/Container";
import { useState, useRef, useEffect } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Body from "./Body";
import Button from "@material-ui/core/Button";

function  Drawers(props) {

  const [songs,setSongs] =  useState();
  console.log("what");
  console.log(songs);

  const classes = useStyles();
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  let playing = "";

  let was = play;
  function play() {
    if (playing) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  }
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    fetch("http://localhost:9000/alien")
    .then(function(response) {return response.json();})
    .then(json => setSongs(json))
  },[])

  const myPic = ["./data/1.jpg","./data/2.jpg","./data/3.jpg","./data/4.jpg","./data/5.png"]
  
  const[i, seti] = useState(0);

  

 
  function forward(){
      const k = (i+1)%5;
      seti(k);
  }

  function backward(){
    if (i==0){
      i = 4
    }else{
      const k = i - 1;
      seti(k);
    }
  }
  const backup = "./data/one.mp3"

  

  return (
    <div>
      <div className={classes.drawer}>
        <div variant="permanent" anchor="right">
          <List className={classes.listBox}>
            <ListItem className={classes.listright}>
              <Container className={classes.player}>
                <Container className={classes.container}>
                  <audio src={backup && songs[i].url } ref={audioEl}></audio>
                  <img
                    className={classes.image}
                    src={myPic[i]}
                    alt={faPlay}
                  />
                </Container>
                
                <div className={classes.hi}>
                  <Body className={classes.anime} />
                </div>
                <div className={classes.controls}>
                  <Button className={classes.ControlBtn} onClick={backward}>
                    <i
                      className="fa fa-backward"
                      style={{ fontSize: "30px", color: "black" }}
                    ></i>
                  </Button>
                  <Button className={classes.ControlBtn} onClick={was}>
                    <i
                      className={isPlaying ? "fa fa-pause" : "fa fa-play"}
                      style={{ fontSize: "30px", color: "black" }}
                    ></i>
                  </Button>
                  <Button className={classes.ControlBtn} onClick={forward}>
                    <i
                      className="fa fa-forward"
                      style={{ fontSize: "30px", color: "black" }}
                    ></i>
                  </Button>
                </div>
              </Container>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Drawers;
