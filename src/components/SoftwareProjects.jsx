import React, { useRef } from 'react';

const SoftwareProjects = () => {
  const projects = [
    {
      id: 'slide1',
      imgSrc: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      title: 'Project Alpha',
      description: 'A detailed description of Project Alpha, highlighting its key features, technologies used, and the problems it solves. This project showcases expertise in full-stack development.',
      prev: '#slide4',
      next: '#slide2',
    },
    {
      id: 'slide2',
      imgSrc: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      title: 'Service Beta',
      description: 'Service Beta is an innovative solution for cloud-based data processing. It leverages modern DevOps practices for continuous integration and deployment.',
      prev: '#slide1',
      next: '#slide3',
    },
    {
      id: 'slide3',
      imgSrc: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
      title: 'Tool Gamma',
      description: 'This tool was developed to streamline workflow automation. It features an intuitive user interface and robust backend logic, built with Python and React.',
      prev: '#slide2',
      next: '#slide4',
    },
    {
      id: 'slide4',
      imgSrc: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
      title: 'Platform Delta',
      description: 'Platform Delta is a scalable microservices-based application designed for high availability and performance. It demonstrates advanced architectural patterns.',
      prev: '#slide3',
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
        Software Projects
      </h1>
      <div ref={carouselRef} className="carousel w-full rounded-box shadow-lg"> {/* Added rounded-box and shadow for better appearance */}
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="carousel-item relative w-full h-[480px] md:h-[400px] lg:h-[480px]" // Responsive height
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
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
