import React, { Component } from 'react';
import './App.css';
import Typing from 'react-typing-animation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
                <Typing>
                    <span><h1 class="mx-auto my-0 text-uppercase">Hi my name is Brij.</h1></span>
                </Typing>
            </div>
        </div>
    </header>

    <section id="about" class="about-section text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-black mb-4">This is an about section </h2>
            </div>
          </div>
        </div>
    </section>

  </body>
    );
  }
}

export default App;
