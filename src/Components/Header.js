import React, { Component } from 'react';
import Typist from 'react-typist';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <b><h3>{name}</h3></b>
            <Typist>
            <span> Computer Science Master's Student</span>
            <Typist.Backspace count={40} delay={50} />
            <span> <a class="anchorUnderline" href="mailto:akhilmadineni@outlook.com">are you in Bay Area? let's get coffee!</a> </span>
            <Typist.Backspace count={70} delay={50} />
            <span>can play any instrument,         </span>
            <Typist.Backspace count={8} delay={100} />
            <span>Badly</span>
            <Typist.Backspace count={70} delay={100} />

            </Typist>

            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div> 
         
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
