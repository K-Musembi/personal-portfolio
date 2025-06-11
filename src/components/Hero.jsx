
const Hero = () => {
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
                    <h1 className="text-5xl font-light">Hello. I'm</h1>
                    <h1 className="mb-5 text-6xl font-black whitespace-nowrap">Kevin Musembi</h1>
                    <div className="flex justify-center gap-12 mt-8">
                        <button className="btn btn-primary btn-lg rounded-full">About Me</button>
                        <button className="btn btn-base-100 btn-lg text-primary rounded-full">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;