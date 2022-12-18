// import HeroBanner from './images/avatar-man.png'
import StatsCard1 from './images/stats-card_icon-1.png'
import StatsCard2 from './images/stats-card_icon-2.png'
import AboutBanner from './images/about-banner.png'
import HTML5 from './images/html5.png'
import CSSLogo from './images/css3.png'
import JavascriptLogo from './images/javascript.png'
import ReactLogo from './images/react.png'
import BootstrapLogo from './images/bootstrap.png'
import TypescriptLogo from './images/typescript.png'
import WebpackLogo from './images/webpack.png'
import GitLogo from './images/git.png'
import NPMLogo from './images/npm.png'
import CommandLogo from './images/command.png'
import VSCodeLogo from './images/vs-code.png'
import { IonIcon } from "react-ion-icon";
import MuiLogo from './images/mui.png'

import './App.css';

import React, { Component } from 'react'

export default class App extends Component {


  componentDidMount() {
    /**
  * element toggle function
  */

    const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



    /**
     * header sticky & go to top
     */

    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    window.addEventListener("scroll", function () {

      if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }

    });



    /**
     * navbar toggle
     */

    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");

    navToggleBtn.addEventListener("click", function () {

      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);

    });



    /**
     * skills toggle
     */

    const toggleBtnBox = document.querySelector(".skills-toggle");
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const skillsBox = document.querySelector(".skills-box");

    for (let i = 0; i < toggleBtns.length; i++) {
      toggleBtns[i].addEventListener("click", function () {

        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
        elemToggleFunc(skillsBox);

      });
    }


    /**
     * dark & light theme toggle
     */

    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    themeToggleBtn.addEventListener("click", function () {

      elemToggleFunc(themeToggleBtn);

      if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
      } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
      }

    });

    /**
     * check & apply last time selected theme from localStorage
     */

    if (localStorage.getItem("theme") === "light_theme") {
      themeToggleBtn.classList.add("active");
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      themeToggleBtn.classList.remove("active");
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    }
  }

  downloadCV = () => {
    window.open("/Ravi_Karbhari_Resume.pdf", "_blank")
  }

  render() {
    return (
      <div id="top" className="dark_theme">

        {/* <!-- 
    - #HEADER
  --> */}

        <header className="header" data-header>
          <div className="container">

            <h1 className="h1 logo">
              <a href="#">Ravi<span>.</span></a>
            </h1>

            <div className="navbar-actions">

              <select name="language" id="lang">
                <option value="en">En</option>
                <option value="ar">Ar</option>
              </select>

              <button className="theme-btn" aria-label="Change Theme" title="Change Theme" data-theme-btn>
                <span className="icon"></span>
              </button>

            </div>

            <button className="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </button>

            <nav className="navbar" data-navbar>
              <ul className="navbar-list">

                <li>
                  <a href="#home" className="navbar-link">Home.</a>
                </li>

                <li>
                  <a href="#about" className="navbar-link">About.</a>
                </li>

                <li>
                  <a href="#skills" className="navbar-link">Skills.</a>
                </li>

                <li>
                  <a href="#experience" className="navbar-link">Experience.</a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link">Contact.</a>
                </li>

              </ul>
            </nav>

          </div>
        </header>





        <main>
          <article className="container">

            {/* <!-- 
        - #HERO
      --> */}

            <section className="hero" id="home">

              {/* <figure className="hero-banner">

          <picture>
            <source srcset={HeroBanner} media="(min-width: 768px)"/>
            <source srcset={HeroBanner} media="(min-width: 500px)"/>
            <img src={HeroBanner} alt="A man in a blue shirt with a happy expression"
              className="w-100"/>
          </picture>

        </figure> */}

              <div className="hero-content">
                <h2 className="h2 hero-title">Hi, I'm Ravi Karbhari </h2>
                <h2 className="h3 hero-title">Frontend Developer</h2>

                <a href="#contact" style={{ margin: 'auto', display: 'flex' }} className="btn btn-primary">Get in touch</a>

              </div>

              <ul className="hero-social-list">

                <li>
                  <a href="#" className="hero-social-link">
                    <IonIcon name="logo-facebook"></IonIcon>

                    <div className="tooltip">Facebook</div>
                  </a>
                </li>

                <li>
                  <a href="#" className="hero-social-link">
                    <IonIcon name="logo-twitter"></IonIcon>

                    <div className="tooltip">Twitter</div>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/ravi-karbhari/" target="_blank" className="hero-social-link">
                    <IonIcon name="logo-linkedin"></IonIcon>

                    <div className="tooltip">Linkedin</div>
                  </a>
                </li>

              </ul>

              <a href="#stats" className="scroll-down">Scroll</a>

            </section>





            {/* <!-- 
        - #STATS
      --> */}

            <section className="stats" id="stats">
              <ul className="stats-list">

                <li>
                  <a href="#" className="stats-card">

                    <div className="card-icon">
                      <img src={StatsCard1} alt="Badge icon" />
                    </div>

                    <h2 className="h2 card-title">
                      4+ <strong>Years of Experience</strong>
                    </h2>

                    {/* <IonIcon name="chevron-forward-outline"></IonIcon> */}

                  </a>
                </li>

                <li>
                  <a href="#" className="stats-card">

                    <div className="card-icon">
                      <img src={StatsCard2} alt="Checkmark icon" />
                    </div>

                    <h2 className="h2 card-title">
                      6+ <strong>Completed Projects</strong>
                    </h2>

                    {/* <IonIcon name="chevron-forward-outline"></IonIcon> */}

                  </a>
                </li>


              </ul>
            </section>




            {/* 
      <!-- 
        - #ABOUT
      --> */}

            <section className="about" id="about">

              <figure className="about-banner">
                <img src={AboutBanner} alt="A man in a alice blue shirt with a thinking expression"
                  className="w-100" />
              </figure>

              <div className="about-content section-content">

                <h2 className="h3 section-title">About me!</h2>

                <p className="section-text">
                  Hi! I’m Ravi Karbhari, and I’m a developer who has passion for building clean web applications with intuitive
                  functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always
                  curious about
                  learning new skills, tools, and concepts. In addition to working on various projects, I have
                  worked with
                  creative teams, which involves daily stand-ups and communications, source control, and project management.
                </p>

                <div className="btn-group">
                  {/* <button className="btn btn-secondary">Hire me</button> */}

                  <button className="btn btn-primary" onClick={() => this.downloadCV()}>Download cv</button>
                </div>

              </div>

            </section>





            {/* <!-- 
        - #SKILLS
      --> */}

            <section className="skills" id="skills">

              <div className="skills-content section-content">

                <p className="section-subtitle">I Play With</p>

                <h2 className="h3 section-title">What My Programming Skills and Tools Included?</h2>

                <p className="section-text">
                  I develop simple, intuitive and responsive user interface that helps users get things done with less effort
                  and time
                  with those technologies.
                </p>

                {/* <div className="skills-toggle" data-toggle-box>
                  <button className="toggle-btn " data-toggle-btn>Skills</button>

                  <button className="toggle-btn active" data-toggle-btn>Tools</button>
                </div> */}

              </div>

              <div className="skills-box" data-skills-box>

                <ul className="skills-list">

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">HTML5</div>

                      <div className="card-icon">
                        <img src={HTML5} alt="HTML5 logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">CSS3</div>

                      <div className="card-icon">
                        <img src={CSSLogo} alt="CSS3 logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">JavaScript</div>

                      <div className="card-icon">
                        <img src={JavascriptLogo} alt="JavaScript logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">TypeScript</div>

                      <div className="card-icon">
                        <img src={TypescriptLogo} alt="TypeScript logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Bootstrap</div>

                      <div className="card-icon">
                        <img src={BootstrapLogo} alt="Bootstrap logo" />
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="skill-card">
                      <div className="tooltip">React</div>

                      <div className="card-icon">
                        <img src={ReactLogo} alt="React logo" />
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Webpack</div>

                      <div className="card-icon">
                        <img src={WebpackLogo} alt="Webpack logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Git</div>

                      <div className="card-icon">
                        <img src={GitLogo} alt="Git logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Npm</div>

                      <div className="card-icon">
                        <img src={NPMLogo} alt="Npm logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Command Line</div>

                      <div className="card-icon">
                        <img src={CommandLogo} alt="Command Line logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">VS Code</div>

                      <div className="card-icon">
                        <img src={VSCodeLogo} alt="VS Code logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Material UI</div>

                      <div className="card-icon">
                        <img src={MuiLogo} alt="MUI logo" />
                      </div>
                    </div>
                  </li>
                </ul>

                {/* <ul className="tools-list">



                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Webpack</div>

                      <div className="card-icon">
                        <img src={WebpackLogo} alt="Webpack logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Git</div>

                      <div className="card-icon">
                        <img src={GitLogo} alt="Git logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Npm</div>

                      <div className="card-icon">
                        <img src={NPMLogo} alt="Npm logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Command Line</div>

                      <div className="card-icon">
                        <img src={CommandLogo} alt="Command Line logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">VS Code</div>

                      <div className="card-icon">
                        <img src={VSCodeLogo} alt="VS Code logo" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="skill-card">
                      <div className="tooltip">Slack</div>

                      <div className="card-icon">
                        <img src={SlackLogo} alt="Slack logo" />
                      </div>
                    </div>
                  </li>



                </ul> */}

              </div>

            </section>


            <section className='experience' id='experience'>
              <h3 className="h3 section-title">Career Journey</h3>

              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="Yearly-timeline">
                      <div class="timeline">
                        <a href="https://www.cybage.com/" class="timeline-content">
                          <div class="timeline-icon">Cybage Software</div>
                          <h3 class="title">2021-</h3>
                          <p class="description">
                            Senior Software Engineer (ReactJs)
                          </p>
                        </a>
                      </div>
                      <div class="timeline">
                        <a href="https://www.nellinfotech.com/" class="timeline-content">
                          <div class="timeline-icon">Nell Infotech</div>
                          <h3 class="title">2018-2021</h3>
                          <p class="description">
                            Software Engineer (ReactJs)
                          </p>
                        </a>
                      </div>
                      <div class="timeline">
                        <a href="https://www.sphinx-solution.com/" class="timeline-content">
                          <div class="timeline-icon">Sphinx Solutions</div>
                          <h3 class="title">2015-2018</h3>
                          <p class="description">
                            Data Analyst (Kofax Kapow Developer)
                          </p>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 
      <!-- 
        - #PROJECTS
      --> */}

            {/* <section className="project" id="portfolio">

        <ul className="project-list">

          <li>
            <div className="project-content section-content">

              <p className="section-subtitle">My Works</p>

              <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>

              <p className="section-text">
                We develop the best quality website that serves for the long-term. Well-documented, clean, easy and
                elegant interface
                helps any non-technical clients.
              </p>

            </div>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-1.png" className="w-100" alt="A macintosh on a yellow background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 01</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-2.png" className="w-100" alt="On a Blue background, a Wacom and a mouse."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 02</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-3.png" className="w-100"
                  alt="A Cassette tape on a mellow apricot background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 03</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-4.png" className="w-100"
                  alt="Blue digital watch on a dark liver background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 04</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-5.png" className="w-100"
                  alt="On a dark liver background, Airport luggage car carrying a luggage."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 05</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-6.png" className="w-100"
                  alt="On a yellow background, a digital watch and a glass."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 06</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="./assets/images/project-7.png" className="w-100"
                  alt="A fujifilm instant camera on a dark electric blue background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 07</h3>

                <time className="publish-date" datetime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <button className="load-more">Load more work</button>
          </li>

        </ul>

      </section> */}





            {/* <!-- 
        - #CONTACT
      --> */}

            <section className="contact" id="contact">

              <div className="contact-content section-content">

                <p className="section-subtitle">Contact</p>

                <h2 className="h3 section-title">Please Drop a Message</h2>

                {/* <p className="section-text">
                  Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.
                </p> */}

                <ul className="contact-list">

                  <li className="contact-list-item">

                    <div className="contact-item-icon">
                      <IonIcon name="location-outline"></IonIcon>
                    </div>

                    <div className="wrapper">
                      <h3 className="h4 contact-item-title">Address:</h3>

                      <address className="contact-info">
                        Pune, Maharashtra
                      </address>
                    </div>

                  </li>

                  <li className="contact-list-item">

                    <div className="contact-item-icon">
                      <IonIcon name="call-outline"></IonIcon>
                    </div>

                    <div className="wrapper">
                      <h3 className="h4 contact-item-title">Phone:</h3>

                      <a href="tel:9561648990" className="contact-info">(91) 9561648990</a>
                    </div>

                  </li>

                  <li className="contact-list-item">

                    <div className="contact-item-icon">
                      <IonIcon name="mail-outline"></IonIcon>
                    </div>

                    <div className="wrapper">
                      <h3 className="h4 contact-item-title">Email:</h3>

                      <a href="mailto:karbhariravi@gmail.com" className="contact-info">karbhariravi@gmail.com</a>

                    </div>

                  </li>

                  <li>
                    <ul className="contac-social-list">

                      <li>
                        <a href="#" className="contact-social-link">
                          <div className="tooltip">Facebook</div>

                          <IonIcon name="logo-facebook"></IonIcon>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="contact-social-link">
                          <div className="tooltip">Twitter</div>

                          <IonIcon name="logo-twitter"></IonIcon>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/in/ravi-karbhari" target="_blank" className="contact-social-link">
                          <div className="tooltip">Linkedin</div>

                          <IonIcon name="logo-linkedin"></IonIcon>
                        </a>
                      </li>

                      {/* <li>
                        <a href="#" className="contact-social-link">
                          <div className="tooltip">Youtube</div>

                          <IonIcon name="logo-youtube"></IonIcon>
                        </a>
                      </li> */}

                    </ul>
                  </li>

                </ul>

              </div>

              {/* <form action="" className="contact-form">

                <div className="form-wrapper">

                  <label htmlFor="name" className="form-label">Name</label>

                  <div className="input-wrapper">

                    <input type="text" name="name" id="name" required placeholder="e.g John Doe" className="input-field" />

                    <IonIcon name="person-circle"></IonIcon>

                  </div>

                </div>

                <div className="form-wrapper">

                  <label for="email" className="form-label">Email</label>

                  <div className="input-wrapper">

                    <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com"
                      className="input-field" />

                    <IonIcon name="mail"></IonIcon>

                  </div>

                </div>

                <div className="form-wrapper">

                  <label for="phone" className="form-label">Phone</label>

                  <div className="input-wrapper">

                    <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />

                    <IonIcon name="call"></IonIcon>

                  </div>

                </div>

                <div className="form-wrapper">

                  <label htmlFor="message" className="form-label">Message</label>

                  <div className="input-wrapper">

                    <textarea name="message" id="message" required placeholder="Write message..."
                      className="input-field"></textarea>

                    <IonIcon name="chatbubbles"></IonIcon>

                  </div>

                </div>

                <button type="submit" className="btn btn-primary">Send</button>

              </form> */}

            </section>

          </article>
        </main>





        {/* <!-- 
    - #FOOTER
  --> */}

        <footer className="footer">
          <div className="container">

            <p className="h1 logo">
              <a href="#">
                Ravi<span>.</span>
              </a>
            </p>

            <p className="copyright">
              &copy; 2022 <a href="#">Ravi Karbhari</a>.
            </p>

          </div>
        </footer>





        {/* <!-- 
    - #GO TO TOP
  --> */}

        <a href="#top" className="go-top" data-go-top title="Go to Top">
          <IonIcon name="arrow-up"></IonIcon>
        </a>

      </div>
    )
  }
}

