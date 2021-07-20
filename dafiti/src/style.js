import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flexbox: {
    flexGrow: 1,
  },
  listBox: {
    margin: 0,
  },
  list: {
    
    minWidth: 0,
    flexDirection: "flex-start",
  },
  listright: {
    
    maxWidth: 300,
    flexDirection: "flex-start",
  },

  choice: {
    display: "flex",
  },
  main: {
    marginRight: 0,
  },
  link: {
    paddingRight: 20,
    color: "black",
    textDecoration: "none",

  },

  

  right: {
    backgroundColor: "red",
    padding: 10,
  },
  back: {
    
    
    margin: 10,
    padding: 20,
  },
  ri: {
    margin: 20,
    
    
  },
  card: {
    margin: 10,
    padding: 20,
  },

  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "blue",
    width: "100%",
    borderRadius: "500px",
    height: "150px",
  },
  controls: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
  },
  ControlBtn: {
    margin: "10px",
    display: "flex",
  },
  player: {
    backgroundColor: "#2A9999",
    borderRadius: "20px",
    padding: "20px",
    width: 250,
    height: 300,
  },
  hi: {
    height: "10px",
    width: "50px",
  },
  anime: {
    width: "10px",
  },

  paper:{
    minHeight: "200px"
  }

}));

export default useStyles;
