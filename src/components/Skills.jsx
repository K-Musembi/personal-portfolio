import React from 'react';

const Skills = () => {
  return (
    <div className="container bg-primary mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-base-100 mb-12">
        Services Offered
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="https://via.placeholder.com/400x225?text=Software+Dev"
              alt="Software Development"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Backend Development</h2>
            <p className="text-[1.0625rem] text-base-content/70">
              Designing and developing backend solutions and web applications using modern technologies and frameworks - Java Spring Boot, Python Django, React, SQL and NoSQL databases, Docker, Git. Other services include AI agent development.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="https://via.placeholder.com/400x225?text=Web+Design"
              alt="Web Design"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">DevOps Engineering</h2>
            <p className="text-[1.0625rem] text-base-content/70">
              Designing and implementing CI/CD pipelines, automating deployments, and managing cloud infrastructure using AWS services like EC2, S3, Lambda, and RDS, as well as containerization using Docker and monitoring tools like Prometheus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;