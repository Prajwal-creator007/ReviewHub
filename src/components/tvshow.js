import './in.css';
import rh from './Images/logo2.jpg'
import sl from './Images/tvshowlogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';

function TV() {
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
        <img src={sl} alt="TV" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>TV Shows</h1>
            <br/>
            <p>A television show, or simply TV show, is any content produced for viewing on a<br/>
                     television set which can be broadcast via over-the-air, satellite, or cable, excluding <br/>
                     breaking news, advertisements, or trailers that are typically placed between shows.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="tvshows"/><br/>
      <ReviewList type="tvshows"/>
      
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

export default TV;
