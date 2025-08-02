import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        About Me
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a tech enthusiast with more than 2 years of
            experience as a software developer. I am passionate about building digital solutions that serve a useful purpose by addressing actual needs. I motivate myself to learn and grow by staying up to date with the latest trends.
          </p>
          <p className="text-lg leading-relaxed">
            My main interests include Backend Development, Cloud Computing and Artificial Intelligence. I'm always eager to contribute to projects that drive innovation and make a positive impact. Other interests include reading and exploring.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Let's connect</h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com/K-Musembi"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kevin-musembi/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://discord.com/channels/kevin_musembi"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/se-bg.png"
            alt="Profile"
            className="rounded-lg shadow-lg max-w-sm w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;