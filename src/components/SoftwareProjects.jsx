import React, { useRef } from 'react';

const SoftwareProjects = () => {
  const projects = [
    {
      id: 'slide1',
      imgSrc: '/sokoplace-project.png',
      title: 'SokoPlace E-Commerce',
      description: 'An e-commerce platform for electronic gadgets developed using Java Spring Boot, React and PostgreSQL. It includes features like product listings to enable users browse through different categories, and a cart component to manage purchases.',
      url: 'https://github.com/K-Musembi/SokoPlace-Backend',
      prev: '#slide3',
      next: '#slide2',
    },
    {
      id: 'slide2',
      imgSrc: '/directory-project-bg.png',
      title: 'Employee Directory',
      description: 'A comprehensive contacts directory application built with Java Spring Boot, React, and MySQL. It features a user-friendly interface with graphical charts to display the main statisctics in the directory data.',
      url: 'https://github.com/K-Musembi/contact_registry',
      prev: '#slide1',
      next: '#slide3',
    },
    {
      id: 'slide3',
      imgSrc: '/embe-zuri.jpeg',
      title: 'AI Crop Disease Detection',
      description: 'An AI-powered crop disease detection system that uses a Deep Learning model to diagnose crop diseases. Built using Python (Flask), TensorFlow, and MySQL, it provides a web interface for users to upload images and receive disease predictions.',
      url: 'https://github.com/K-Musembi/embe-zuri',
      prev: '#slide2',
      next: '#slide1',
    },

  ];

  const carouselRef = useRef(null);

  const navigateToSlide = (slideId) => {
    if (carouselRef.current) {
      const targetSlide = document.getElementById(slideId);
      if (targetSlide) {
        carouselRef.current.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16"> {/* Responsive padding */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
        Latest Projects
      </h1>
      <div ref={carouselRef} className="carousel w-full rounded-box shadow-lg"> {/* Added rounded-box and shadow for better appearance */}
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="carousel-item relative w-full h-[600px] sm:h-[550px] md:h-[400px] lg:h-[480px]" // Improved responsive height
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="w-full md:w-1/2 h-2/5 md:h-full bg-base-100">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 h-3/5 md:h-full p-4 md:p-6 lg:p-10 flex flex-col justify-center bg-base-100">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-neutral-content-focus text-center">
                  {project.title}
                </h3>
                <p className="text-base-content/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm md:btn-md mt-2 md:mt-6 self-center">View Project</a>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute left-2 right-2 md:left-3 md:right-3 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() => navigateToSlide(project.prev.substring(1))}
                className="btn btn-circle btn-sm md:btn-md btn-primary text-neutral-content hover:bg-neutral-focus"
                aria-label={`Go to previous project slide`}
              >
                ❮
              </button>
              <button
                onClick={() => navigateToSlide(project.next.substring(1))}
                className="btn btn-circle btn-sm md:btn-md btn-primary text-neutral-content hover:bg-neutral-focus"
                aria-label={`Go to next project slide`}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareProjects;
