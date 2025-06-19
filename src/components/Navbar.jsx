import React from 'react';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><button onClick={() => scrollToSection('home')} className="text-base w-full text-left text-primary hover:bg-primary hover:text-primary-content font-semibold">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-base w-full text-left text-primary hover:bg-primary hover:text-primary-content font-semibold">About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="text-base w-full text-left text-primary hover:bg-primary hover:text-primary-content font-semibold">Services Offered</button></li>
            <li><button onClick={() => scrollToSection('software-projects')} className="text-base w-full text-left text-primary hover:bg-primary hover:text-primary-content font-semibold">Products</button></li>
            <li><button onClick={() => scrollToSection('contacts')} className="text-base w-full text-left text-primary hover:bg-primary hover:text-primary-content font-semibold">Contacts</button></li>
          </ul>
        </div>
        <button onClick={() => scrollToSection('home')} className="btn btn-ghost text-2xl font-black bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text hover:bg-transparent">Portfolio</button>
      </div>
      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 gap-x-4">
          <li><button onClick={() => scrollToSection('home')} className="text-base text-primary hover:bg-primary hover:text-primary-content rounded-lg px-3 py-2 font-semibold">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="text-base text-primary hover:bg-primary hover:text-primary-content rounded-lg px-3 py-2 font-semibold">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="text-base text-primary hover:bg-primary hover:text-primary-content rounded-lg px-3 py-2 font-semibold">Services Offered</button></li>
          <li><button onClick={() => scrollToSection('software-projects')} className="text-base text-primary hover:bg-primary hover:text-primary-content rounded-lg px-3 py-2 font-semibold">Products</button></li>
          <li><button onClick={() => scrollToSection('contacts')} className="text-base text-primary hover:bg-primary hover:text-primary-content rounded-lg px-3 py-2 font-semibold">Contacts</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;