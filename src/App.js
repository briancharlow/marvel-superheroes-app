import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SingleSuperhero from './components/SingleSuperhero';
import AllComics from './components/AllComics';
import AllEvents from './components/Events';
import SingleEvent from './components/SingleEvent';
import './App.css';
import AllCharacters from './components/AllCharacters';
import Footer from './components/Footer';
import AllStories from './components/stories';
import ComicDetails from "./components/ComicDetails";
import SingleStory from "./components/StoryDetails";
import AllCreators from "./components/Creators";
import CreatorDetails from './components/CreatorDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<AllCharacters />} />
          <Route path="/superheroes" element={<AllCharacters />} />
          <Route path="/comics" element={< AllComics />} />
          <Route path="/events" element={< AllEvents />} />
          <Route path="/Stories" element={< AllStories />} />
          <Route path="/:id" element={<SingleSuperhero />} />
          <Route exact path="/comics/:id" component={< ComicDetails />} />
          <Route exact path="/Stories/:storyId" component={< SingleStory />} />
          <Route exact path="/creators" component={< AllCreators />} />
          <Route exact path="/creators/:creatorId" component={< CreatorDetails />} />
          <Route exact path="/event/:eventId" component={< SingleEvent />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
