import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">

        <div className="card md:w-1/2 bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Get in Touch</h2>
            
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope size={24} />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <a href="mailto:your.email@example.com" className="link link-hover text-primary-content/80 text-base">
                  kevinmusembi.m@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <FaLinkedinIn size={24} />
              <div>
                <p className="font-semibold text-lg">LinkedIn</p>
                <a href="https://linkedin.com/in/kevin-musembi/" className="link link-hover text-primary-content/80 text-base">
                  https://linkedin.com/in/kevin-musembi/
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <FaPhone size={24} />
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <a href="tel:+1234567890" className="link link-hover text-primary-content/80 text-base">
                  +254-723-929-410
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} />
              <div>
                <p className="font-semibold text-lg">Address</p>
                <p className="text-primary-content/80 text-base">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card md:w-1/2 bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}> {/* Basic form handling */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary-content text-base">Full Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/50" 
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary-content text-base">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/50" 
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary-content text-base">Message</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered h-32 w-full bg-base-100 text-base-content placeholder-base-content/50" 
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;