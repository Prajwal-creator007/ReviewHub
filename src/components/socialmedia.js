import './in.css';
import rh from './Images/logo2.jpg'
import sl from './Images/socialmedialogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';


function SocialMedia() {
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
        <img src={sl} alt="Media" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Social Media</h1>
            <br/>
            <p>Social media are interactive technologies that facilitate the creation<br/>
                     and sharing of information, ideas, interests, and other forms of expression through<br/>
                      virtual communities and networks.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="socialmedia"/><br/>
      <ReviewList type="socialmedia"/>
      
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

export default SocialMedia;
