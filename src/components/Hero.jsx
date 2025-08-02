
const Hero = () => {
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(/portfolio-bg.png)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl md:text-5xl font-light">Hello. I'm</h1>
                    <h1 className="mb-5 text-5xl md:text-6xl font-bold whitespace-nowrap">Kevin Musembi</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-8">
                        <button onClick={handleAboutClick} className="btn btn-primary md:btn-lg rounded-full">About Me</button>
                        <a href="/Kevin_Musembi_Resume.pdf" download className="btn btn-base-100 md:btn-lg text-primary rounded-full">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;