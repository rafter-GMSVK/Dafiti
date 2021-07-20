import React from "react";
import  { useState } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Modal from '@material-ui/core/Modal';

import Box from "../components/Box";

function Books() {
  const classes = useStyles();
  const [open, setOpen ] = useState(false);

  const books = ["./book1.pdf", "./book2.pdf", "./my.pdf"]

  const [book, setBook] = useState("./book1.pdf")

  const [val, setVal] = useState(false);

  function handleClose(){
    setOpen(false);
  }


  function change(val){
    setBook(books[val])
    let i = open
    i = !open
    setOpen(i);
    

  }


  


  return (
    <div>
      <div>
         
    
            <Modal
              disablePortal
              disableEnforceFocus
              disableAutoFocus
              open = {open}
              onClose = {handleClose}
              aria-labelledby="server-modal-title"
              aria-describedby="server-modal-description"
       
        
      >
        <div >
        <button onClick={change}>Exit</button>
        <iframe src={book} className= "Books"  width="80%" height="1000" scrolling="auto" style={{margin: 100}}></iframe> 
          
        </div>
      </Modal>
        </div>
      <div className={classes.ri} style={{backgroundImage: "url('https://www.popsci.com/app/uploads/2019/12/20/VC6OKOFVRZAN7GUN4KUEHAAOMU.jpg?width=1440')", width: "90%", borderRadius:"30px"}}>
        <Grid container spacing={50} >
          <Grid container xs={12} className={classes.back} style={{display: "flex", justifyContent: "center"}}>
            <Grid item xs={12} className={classes.card}>
              <div  align="center">
                <h1 align="center" style={{color: "white", fontSize: "40px", textAlign: "center"}}>
                  Comics
                </h1>
              </div>
            </Grid>

            <Grid item xs={2} className={classes.card}>
              <div className={classes.paper} style={{justifyContent: "center",}}>
                <Button onClick={()=>change(0)} style={{ justifyContent: "center", backgroundColor:"white", borderRadius:10}}>
                  <img className="bookbtn" src="./data/book1 .png" style={{width: 150, padding:10}}></img>
                </Button>
               
              </div>
            </Grid>

            <Grid item xs={2} className={classes.card}>
              <div className={classes.paper} style={{justifyContent: "center"}}>
                <Button onClick={()=>change(1)} style={{justifyContent: "center", backgroundColor:"white", borderRadius:10}}>
                  <img className="bookbtn" src="./data/book2.png" style={{width: 150, padding: 10}}  ></img>
                </Button>

              </div>
            </Grid>

            <Grid item xs={2} className={classes.card}>
              <div className={classes.paper} style={{ justifyContent: "center"}}>
                <Button onClick={()=>change(2)} style={{justifyContent: "center", backgroundColor: "white",borderRadius:10}}>
                  <img className="bookbtn" src="./data/02.jpg" style={{width: 150, padding: 10}}  ></img>
                </Button>
                
              </div>
            </Grid>
            
          </Grid>
        </Grid>
  </div> 
    </div>
  );
}

export default Books;



