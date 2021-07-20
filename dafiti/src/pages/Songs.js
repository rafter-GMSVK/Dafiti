import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Drawers from "../components/Drawers";



function Songs() {
  const classes = useStyles();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  

  let playing = "";
  const [isPlaying, setIsPlaying] = useState(false);

  function play() {
    if (playing) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  }
  return (
    
    <div className={classes.flexbox}>
      <Drawers currentSongIndex = {currentSongIndex} setCurrentSongIndex ={setCurrentSongIndex} nextSongIndex = {nextSongIndex} i = {1} />
      <div className={classes.main}>
        <div className={classes.ri}>
          <Grid container spacing={3}>
            <Grid container xs={12} className={classes.back}>
              <Grid item xs={12} className={classes.card}>
                <div align="center" style={{color:"white", padding:"30px",backgroundColor: "#6930c3", borderRadius: "30px"}}>
                  <h1 xs={6}>
                    Global Top
                  </h1>
                </div>
              </Grid>

              <Grid item xs={2} className={classes.card}>
                <Paper className={classes.paper}>
                  <Button onClick={play}>
                  <img src="./data/3.jpg" style={{ padding:"5%", width: "100%", height: "100px"}}></img>
                  </Button>
                  <div>
                    <Typography
                      variant="text"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      Viva La vida
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2} className={classes.card}>
                <Paper className={classes.paper}>
                  <Button onClick={play}>

                    <img src="./data/1.jpg" style={{ padding:"5%", width: "100%", height: "100px"}}></img>
                   
                  </Button>
                  <div>
                    <Typography
                      variant="text"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      Hymn of Weekend
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2} className={classes.card}>
                <Paper className={classes.paper}>
                  <Button onClick={play}>
                  <img src="./data/2.jpg" style={{ padding:"5%", width: "100%", height: "100px"}}></img>
                  </Button>
                  <div>
                    <Typography
                      variant="text"
                      style={{ display: "block", textAlign: "center", padding: "5%" }}
                    >
                      Something just like this
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2} className={classes.card}>
                <Paper className={classes.paper}>
                  <Button onClick={play}>
                  <img src="./data/4.jpg" style={{ padding:"5%", width: "100%", height: "100px"}}></img>
                  </Button>
                  <div>
                    <Typography
                      variant="text"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      Viva La vida
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2} className={classes.card}>
                <Paper className={classes.paper}>
                  <Button onClick={play}>
                  <img src="./data/5.png" style={{ padding:"5%", width: "100%", height: "100px"}}></img>
                  </Button>
                  <div>
                    <Typography
                      variant="text"
                      style={{ display: "block", textAlign: "center" }}
                    >
                      Viva La vida
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
       
        
        
      </div>
    </div>
  );
}

export default Songs;
