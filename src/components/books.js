import './in.css';
import rh from './Images/logo2.jpg'
import bl from './Images/booklogo.jpg'
import ReviewInput from "./reviewInput";
import ReviewList from './reviewList';
import Nav from './Nav';

function Book() {
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
        <img src={bl} alt="Books" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>Books</h1>
            <br/>
            <p>It is a medium for recording information in the form of writing.<br/>
            It allows us to record both fact and fiction.</p>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
      <ReviewInput type="books"/><br/>
      <ReviewList type="books"/>
      
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

export default Book;
