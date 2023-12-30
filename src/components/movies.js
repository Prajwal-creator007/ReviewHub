import './in.css';
import rh from './Images/logo2.jpg'
import ml from './Images/movieslogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';


function Movie() {
  return (
    <div style={styles.container}>
    <img  src={rh} alt="ReviewHub" className="logo"/>
    <br/>
    <hr/>    
    <div className="colour">
        <br/>
        <Nav/>
        <br/><br/>
        <hr/>
    </div>
<br/>
    <div className="container2">
        <br/><br/>
        <div>
        <img src={ml} alt="Movies" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Movies</h1>
            <br/>
            <p>It is a work of visual art that simulates experiences and otherwise<br/> 
            communicates ideas, stories, perceptions through the use of moving images.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="movies"/><br/>
      <ReviewList type="movies"/>
      
    </div>
  );
};
const styles = {
  container: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};

export default Movie;
