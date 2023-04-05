import Navigation from './navigation.js'
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navigation />
      </header>
      <section>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </section>
      <footer>
        <p className="d-inline mx-5 pb-3">Github: <a href="https://github.com/CoreyStuart">github.com/CoreyStuart</a></p>
        <p className="d-inline mx-5 pb-3">LinkedIn: <a href="https://www.linkedin.com/in/corey-stuart-4b3727237/">github.com/CoreyStuart</a></p>
        <p className="d-inline mx-5 pb-3">Twitter: <a href="https://twitter.com/c_stu21">twitter.com/c_stu21</a></p>
      </footer>
    </div>
  );
}

export default App;
