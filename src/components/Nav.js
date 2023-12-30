import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './in.css'
function Nav(){
return(
<nav>
    <Link to='/' className="linked">Home</Link> 
    <Link to='/about' className="linked">About</Link>
    <Link to='/contact' className="linked">Contact</Link>
</nav>
)
}

// const styles={
//     linked:{
//         color: white,
//         fontSize: large,
//         margin: 60

    
//     }
//}

export default Nav;