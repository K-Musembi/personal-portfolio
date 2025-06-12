import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-base-100">
      <nav className="col-span-full"> {/* Ensure nav spans full width of the grid */}
        <div className="grid grid-flow-col gap-4">
          <a 
            href="https://linkedin.com/in/kevin-musembi/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="link link-hover"
          >
            <FaLinkedin size={28} />
          </a>
          <a 
            href="https://github.com/K-Musembi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="link link-hover"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://discord.com/channels/kevin_musembi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Discord Profile"
            className="link link-hover"
          >
            <FaDiscord size={28} />
          </a>
        </div>
      </nav> 
      <aside className="col-span-full">
        <p className="text-base">© 2025 Kevin Musembi. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;