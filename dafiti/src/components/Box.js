import React from 'react';
import Modal from '@material-ui/core/Modal';

import { useState} from 'react';
import {useRef} from "react";
const Box = (props) => {
  const [open, setOpen ] = useState(props.op);

  

  // function handleOpen() {
  //   setOpen(true);
  // }

  function handleClose(){
    setOpen(false);
  }


  function change(){
    setOpen(false);
  }
    
  


    return (
        <div>
          <h1>Press Esc to Exit</h1>
    
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
        <iframe src={props.url} className= "Books"  width="80%" height="1000" scrolling="auto" style={{margin: 100}}></iframe> 
          
        </div>
      </Modal>
        </div>
    )
}

export default Box;
