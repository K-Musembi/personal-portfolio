import React from 'react';

const Skills = () => {
  return (
    <div className="container bg-primary mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-base-100 mb-6 md:mb-10">
        Services Offered
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
          <figure className="px-8 pt-8">
            <img
              src="/coding1.jpg"
              alt="Software Development"
              className="rounded-xl h-40 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4 md:p-6">
            <h2 className="card-title text-lg md:text-2xl mb-2 md:mb-3">Backend Development</h2>
            <p className="text-sm md:text-base text-base-content/70">
              Designing and developing backend solutions and web applications using
              modern frameworks - Java Spring Boot, Python FastAPI,
              React, SQL and NoSQL databases, Docker, Git. Other services include
              AI agent development.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
          <figure className="px-8 pt-8">
            <img
              src="/devops1.jpg"
              alt="Web Design"
              className="rounded-xl h-40 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-4 md:p-6">
            <h2 className="card-title text-lg md:text-2xl mb-2 md:mb-3">DevOps Engineering</h2>
            <p className="text-sm md:text-base text-base-content/70">
              Cloud solutions - designing and implementing CI/CD pipelines, automating deployments,
              and managing cloud infrastructure using AWS services like EC2, S3,
              Lambda, and RDS, as well as containerization using Docker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;