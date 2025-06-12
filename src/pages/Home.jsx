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
            <Hero />
            <About />
            <Skills />
            <SoftwareProjects />
            <AWSProjects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default Home;
