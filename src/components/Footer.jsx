import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-base-100 p-4">
      <div className="flex flex-col items-center gap-2">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a 
              href="https://linkedin.com/in/kevin-musembi/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="link link-hover"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/K-Musembi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="link link-hover"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://discord.com/channels/kevin_musembi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Discord Profile"
              className="link link-hover"
            >
              <FaDiscord size={20} />
            </a>
          </div>
        </nav> 
        <aside>
          <p className="text-sm">© 2025 Kevin Musembi. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;