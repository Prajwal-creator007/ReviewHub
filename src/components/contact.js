import './in.css';
import rh from './Images/logo2.jpg'
import cl from './Images/contactlogo.jpg'
// import ReviewInput from "./reviewInput";
// import ReviewList from './reviewList';
import Nav from './Nav';


function Contact() {
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
        <img src={cl} alt="Contact" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Contact</h1>
            <br/>
            <p>Email: abc123@xyz.com <br/>
                    Mobile: +91 9876543210</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
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

export default Contact;
