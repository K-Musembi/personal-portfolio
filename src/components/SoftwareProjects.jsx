import React, { useRef } from 'react';

const SoftwareProjects = () => {
  const projects = [
    {
      id: 'slide1',
      imgSrc: '/directory-project-bg.png',
      title: 'Employee Directory',
      description: 'A comprehensive contacts directory application built with Java Spring Boot, React, and MySQL. It features a user-friendly interface with graphical charts to display the main statisctics in the directory data.',
      prev: '#slide3',
      next: '#slide2',
    },
    {
      id: 'slide2',
      imgSrc: '/sokoplace-project.png',
      title: 'SokoPlace E-Commerce',
      description: 'An e-commerce platform for electronic gadgets developed using Java Spring Boot, React and PostgreSQL. It includes features like product listings to enable users browse through different categories, and a cart component to manage purchases.',
      prev: '#slide1',
      next: '#slide3',
    },
    {
      id: 'slide3',
      imgSrc: '/embe-zuri.jpeg',
      title: 'AI Crop Disease Detection',
      description: 'An AI-powered crop disease detection system that uses a Deep Learning model to diagnose crop diseases. Built using Python (Flask), TensorFlow, and MySQL, it provides a web interface for users to upload images and receive disease predictions.',
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
    <div className="container mx-auto px-4 py-16"> {/* Consistent padding with Skills.jsx */}
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Latest Projects
      </h1>
      <div ref={carouselRef} className="carousel w-full rounded-box shadow-lg"> {/* Added rounded-box and shadow for better appearance */}
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="carousel-item relative w-full h-[480px] md:h-[400px] lg:h-[480px]" // Responsive height
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-base-100">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-10 flex flex-col justify-center bg-base-100">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-neutral-content-focus self-center">
                  {project.title}
                </h3>
                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <a href="#" className="btn btn-primary mt-6 self-center">View Project</a>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() => navigateToSlide(project.prev.substring(1))}
                className="btn btn-circle btn-primary text-neutral-content hover:bg-neutral-focus"
                aria-label={`Go to previous project slide`}
              >
                ❮
              </button>
              <button
                onClick={() => navigateToSlide(project.next.substring(1))}
                className="btn btn-circle btn-primary text-neutral-content hover:bg-neutral-focus"
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
