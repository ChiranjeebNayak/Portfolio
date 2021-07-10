import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
function App() {
  return (
    <div>
    <Particles
    className="particles-canvas"
    params={{
	    "particles": {
	        "number": {
	            "value": 70
	        },
          color:"#FFA500",
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    <Navbar />
    <Header />
	<About />
	<Education/>
	<Project/>
	<Experience />
	<Contact />
	<Footer />
    </div>
  );
}

export default App;