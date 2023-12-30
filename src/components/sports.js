import './in.css';
import rh from './Images/logo2.jpg'
import sl from './Images/sportslogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';

function Sports() {
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
        <img src={sl} alt="Sports" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Sports</h1>
            <br/>
            <p>Sport pertains to any form of competitive physical activity or game<br/>
                     that aims to use, maintain, or improve physical ability and skills while providing<br/>
                      enjoyment to participants and entertainment to spectators.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="sports"/><br/>
      <ReviewList type="sports"/>
      
    </div>
  );
};
const styles = {
  container: {
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

export default Sports;
