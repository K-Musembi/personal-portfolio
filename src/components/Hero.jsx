
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
                <div className="max-w-xs sm:max-w-md px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">Hello. I'm</h1>
                    <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap">Kevin Musembi</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-12 mt-6 md:mt-8">
                        <button onClick={handleAboutClick} className="btn btn-primary btn-sm sm:btn-md md:btn-lg rounded-full max-w-xs mx-auto md:max-w-none">About Me</button>
                        <a href="/Kevin_Musembi_Resume.pdf" download className="btn btn-base-100 btn-sm sm:btn-md md:btn-lg text-primary rounded-full max-w-xs mx-auto md:max-w-none">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;