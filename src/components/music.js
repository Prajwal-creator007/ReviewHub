import './in.css';
import rh from './Images/logo2.jpg'
import ml from './Images/musiclogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';

function Music() {
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
        <img src={ml} alt="Music" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Music</h1>
            <br/>
            <p>It is generally defined as the art of arranging sound to create some<br/>
                     combination of form, harmony, melody, rhythm or otherwise expressive content.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="music"/><br/>
      <ReviewList type="music"/>
      
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

export default Music;
