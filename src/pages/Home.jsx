import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import SoftwareProjects from "../components/SoftwareProjects";
import AWSProjects from "../components/AWSProjects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <div id="home">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="software-projects">
                <SoftwareProjects />
            </div>
            <div id="contacts">
                <Contacts />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
