//import React, {Component} from 'react';
import Indexmain from "./Resume/main/mainpage";
import Footer from "./Resume/main/Footer";
import Navbar from "./Resume/main/navigation";
import Contact from "./Resume/contact/contact";
import Honestly from "./Resume/honestly/honestly";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Indexmain />
      <Contact />
      <Honestly/>
      <Footer />
    </div>
  );
}


export default App;
