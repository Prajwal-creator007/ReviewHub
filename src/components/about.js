import './in.css';
import rh from './Images/logo2.jpg'
import al from './Images/reviewlogo.jpg'
import Nav from './Nav';


function About() {
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
        <img src={al} alt="About" className="iconDetails"/>
        </div>        
        <div id="divmain">
            <h1>About</h1>
            <br/>
            <p>This is a web-page made as a project for the course Software Engineering (UE21CS341A).<br/>
                    It is a web-page where people can share their feedback and views about different forms of entertainment.<br/>
                    We've included 8 different forms of entertainment that one can review and/or comment.<br/>
                </p>
                <br/>
                <p>
                    Project done by: <br/>
                    PES2UG21CS380 - Pragnya Vempati <br/>
                    PES2UG21CS383 - Prajwal V Shenoy <br/>
                    PES2UG21CS398 - Prerana M <br/></p>
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

export default About ;
