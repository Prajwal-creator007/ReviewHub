import './in.css';
import rh from './Images/logo2.jpg'
import tl from './Images/theatrelogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';

function Plays() {
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
        <img src={tl} alt="Plays" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Theatre/Plays</h1>
            <br/>
            <p>A play is a work of drama, usually consisting mostly of dialogue between<br/>
                     characters and intended for theatrical performance rather than just reading.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="plays"/><br/>
      <ReviewList type="plays"/>
      
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

export default Plays;
