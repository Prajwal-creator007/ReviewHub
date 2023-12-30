//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import Games from './components/games'
import Movie from './components/movies'
import Music from './components/music'
import Book from './components/books'
import Sports from './components/sports'
import TV from './components/tvshow'
import SocialMedia from './components/socialmedia'
import Plays from './components/play'
// import StarRating from './components/star';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/movies" element={<Movie/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/books" element={<Book/>}/>
            <Route path="/sports" element={<Sports/>}/>
            <Route path="/tvshow" element={<TV/>}/>
            <Route path="/socialmedia" element={<SocialMedia/>}/>
            <Route path="/play" element={<Plays/>}/>
            {/* <Route path="/star" element={<StarRating rating={2.5}/>}></Route> */}
          </Routes>
    </Router>
    </div>
  );
}

export default App;
