import './in.css';
import './ReviewHub.css'
import {Link} from 'react-router-dom';
import Nav from './Nav';
import React from 'react';
import rh from './Images/logo2.jpg'
import gl from './Images/gameslogo.jpg'
import ml from './Images/movieslogo.jpg'
import mul from './Images/musiclogo.jpg'
import sl from './Images/socialmedialogo.jpg'
import spl from './Images/sportslogo.jpg'
import tvl from './Images/tvshowlogo.jpg'
import bl from './Images/booklogo.jpg'
import tl from './Images/theatrelogo.jpg'
import StarRating from './star';
// import Avgstars from './starsprint';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Main() {
    return (
        <div className="body">
            <img src={rh} alt="ReviewHub" />
            <br/>
        <hr/>
        <div class="colour">
            <br/>
            <Nav/>
            <br/>
            <hr/>
            <br/><br/>
    
            <div className="block" >
                <img src={ml} alt="ReviewHub" className="logo"/>
                <Link to='/movies' className="linked"> Movies </Link>
                    {/* <span className="rate">
                        <input type="radio" id="star5_1" name="rate_1" value="5" /><label for="star5_1" title="5">5 stars</label>
                        <input type="radio" id="star4_1" name="rate_1" value="4" /><label for="star4_1" title="4">4 stars</label>
                        <input type="radio" id="star3_1" name="rate_1" value="3" /><label for="star3_1" title="3">3 stars</label>
                        <input type="radio" id="star2_1" name="rate_1" value="2" /><label for="star2_1" title="2">2 stars</label>
                        <input type="radio" id="star1_1" name="rate_1" value="1" /><label for="star1_1" title="1">1 star</label>
                    </span> */}
                    <StarRating rating ={2.5}/>
            </div>
            <div className="block">
            <img  src={mul} alt="ReviewHub" className="logo"/>
            <Link to='/music' className="linked"> Music </Link>
                {/* <span className="rate">
                    <input type="radio" id="star5_2" name="rate_2" value="5" /><label for="star5_2" title="5">5 stars</label>
                    <input type="radio" id="star4_2" name="rate_2" value="4" /><label for="star4_2" title="4">4 stars</label>
                    <input type="radio" id="star3_2" name="rate_2" value="3" /><label for="star3_2" title="3">3 stars</label>
                    <input type="radio" id="star2_2" name="rate_2" value="2" /><label for="star2_2" title="2">2 stars</label>
                    <input type="radio" id="star1_2" name="rate_2" value="1" /><label for="star1_2" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
                {/* <Avgstars /> */}
            </div>
    
            <div className="block">
            <img  src={spl} alt="ReviewHub" className="logo"/>
            <Link to='/sports' className="linked"> Sports </Link>
                {/* <span className="rate">
                    <input type="radio" id="star5_3" name="rate_3" value="5" /><label for="star5_3" title="5">5 stars</label>
                    <input type="radio" id="star4_3" name="rate_3" value="4" /><label for="star4_3" title="4">4 stars</label>
                    <input type="radio" id="star3_3" name="rate_3" value="3" /><label for="star3_3" title="3">3 stars</label>
                    <input type="radio" id="star2_3" name="rate_3" value="2" /><label for="star2_3" title="2">2 stars</label>
                    <input type="radio" id="star1_3" name="rate_3" value="1" /><label for="star1_3" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
            </div>
    
            <div className="block">
            <img src={gl} alt="ReviewHub" className="logo"/>
                <Link to='/games' className="linked"> Games </Link>

                {/* <span className="rate">
                    <input type="radio" id="star5_4" name="rate_4" value="5" /><label for="star5_4" title="5">5 stars</label>
                    <input type="radio" id="star4_4" name="rate_4" value="4" /><label for="star4_4" title="4">4 stars</label>
                    <input type="radio" id="star3_4" name="rate_4" value="3" /><label for="star3_4" title="3">3 stars</label>
                    <input type="radio" id="star2_4" name="rate_4" value="2" /><label for="star2_4" title="2">2 stars</label>
                    <input type="radio" id="star1_4" name="rate_4" value="1" /><label for="star1_4" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
            </div>
      <br/>
            <div className="block">
            <img  src={tl} alt="ReviewHub" className="logo"/>
            <Link to='/play' className="linked"> Theatre/Plays </Link>
                {/* <span className="rate">
                    <input type="radio" id="star5_5" name="rate_5" value="5" /><label for="star5_5" title="5">5 stars</label>
                    <input type="radio" id="star4_5" name="rate_5" value="4" /><label for="star4_5" title="4">4 stars</label>
                    <input type="radio" id="star3_5" name="rate_5" value="3" /><label for="star3_5" title="3">3 stars</label>
                    <input type="radio" id="star2_5" name="rate_5" value="2" /><label for="star2_5" title="2">2 stars</label>
                    <input type="radio" id="star1_5" name="rate_5" value="1" /><label for="star1_5" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
            </div>
            <div className="block">
            <img  src={bl} alt="ReviewHub" className="logo"/>    
            <Link to='/books' className="linked"> Book </Link>
                {/* <span className="rate">
                    <input type="radio" id="star5_6" name="rate_6" value="5" /><label for="star5_6" title="5">5 stars</label>
                    <input type="radio" id="star4_6" name="rate_6" value="4" /><label for="star4_6" title="4">4 stars</label>
                    <input type="radio" id="star3_6" name="rate_6" value="3" /><label for="star3_6" title="3">3 stars</label>
                    <input type="radio" id="star2_6" name="rate_6" value="2" /><label for="star2_6" title="2">2 stars</label>
                    <input type="radio" id="star1_6" name="rate_6" value="1" /><label for="star1_6" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
            </div>
    
            <div className="block">
            <img  src={tvl} alt="ReviewHub" className="logo"/>
            <Link to='/tvshow' className="linked"> TV Shows </Link>
                    {/* <span className="rate">
                        <input type="radio" id="star5_7" name="rate_7" value="5" /><label for="star5_7" title="5">5 stars</label>
                        <input type="radio" id="star4_7" name="rate_7" value="4" /><label for="star4_7" title="4">4 stars</label>
                        <input type="radio" id="star3_7" name="rate_7" value="3" /><label for="star3_7" title="3">3 stars</label>
                        <input type="radio" id="star2_7" name="rate_7" value="2" /><label for="star2_7" title="2">2 stars</label>
                        <input type="radio" id="star1_7" name="rate_7" value="1" /><label for="star1_7" title="1">1 star</label>
                    </span> */}
                    <StarRating rating ={2.5}/>
            </div>
            <div className="block">             
            <img  src={sl} alt="ReviewHub" className="logo"/>                 
            <Link to='/socialmedia' className="linked"> Social Media </Link>
                {/* <span className="rate">
                    <input type="radio" id="star5_8" name="rate_8" value="5" /><label for="star5_8" title="5">5 stars</label>
                    <input type="radio" id="star4_8" name="rate_8" value="4" /><label for="star4_8" title="4">4 stars</label>
                    <input type="radio" id="star3_8" name="rate_8" value="3" /><label for="star3_8" title="3">3 stars</label>
                    <input type="radio" id="star2_8" name="rate_8" value="2" /><label for="star2_8" title="2">2 stars</label>
                    <input type="radio" id="star1_8" name="rate_8" value="1" /><label for="star1_8" title="1">1 star</label>
                </span> */}
                <StarRating rating ={2.5}/>
            </div>
            <br/><br/><br/><br/>
            <hr/>
            <h1 id="contact">Contact us</h1>
            <p id="contact">
                Email: abc123@xyz.com<br/>
                Mobile: +91 9876543210<br/>
            </p>        
        </div>
        </div>
    )}
export default Main;
