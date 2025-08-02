import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const SERVICE_ID = 'service_25';
  const TEMPLATE_ID = 'template_25';
  const PUBLIC_KEY = 'VyDK8FJFROv7exf-k';

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Your message has been sent successfully!');
        e.target.reset(); // Clear form fields after successful submission
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6 md:mb-10">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

        <div className="card w-full md:w-1/2 bg-primary text-primary-content shadow-xl">
          <div className="card-body p-4 md:p-6">
            <h2 className="card-title text-xl md:text-2xl mb-3 md:mb-4">Get in Touch</h2>
            
            <div className="flex items-start space-x-3 md:space-x-4 mb-3">
              <FaEnvelope size={20} className="mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base md:text-lg">Email</p>
                <a href="mailto:kevinmusembi.m@gmail.com" className="link link-hover text-primary-content/80 text-sm md:text-base break-all">
                  kevinmusembi.m@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:space-x-4 mb-3">
              <FaLinkedinIn size={20} className="mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base md:text-lg">LinkedIn</p>
                <a href="https://linkedin.com/in/kevin-musembi/" className="link link-hover text-primary-content/80 text-sm md:text-base break-all">
                  linkedin.com/in/kevin-musembi/
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:space-x-4 mb-3">
              <FaPhone size={20} className="mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base md:text-lg">Phone</p>
                <a href="tel:+254723929410" className="link link-hover text-primary-content/80 text-sm md:text-base">
                  +254-723-929-410
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:space-x-4">
              <FaMapMarkerAlt size={20} className="mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base md:text-lg">Address</p>
                <p className="text-primary-content/80 text-sm md:text-base">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full md:w-1/2 bg-primary text-primary-content shadow-xl">
          <div className="card-body p-4 md:p-6">
            <h2 className="card-title text-xl md:text-2xl mb-3 md:mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-3">
                <label className="label py-1">
                  <span className="label-text text-primary-content text-sm md:text-base">Full Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="input input-bordered input-sm md:input-md w-full bg-base-100 text-base-content placeholder-base-content/50" 
                  name="from_name"
                  required
                />
              </div>

              <div className="form-control mb-3">
                <label className="label py-1">
                  <span className="label-text text-primary-content text-sm md:text-base">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="input input-bordered input-sm md:input-md w-full bg-base-100 text-base-content placeholder-base-content/50" 
                  name="from_email"
                  required
                />
              </div>

              <div className="form-control mb-3">
                <label className="label py-1">
                  <span className="label-text text-primary-content text-sm md:text-base">Message</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered textarea-sm md:textarea-md h-24 md:h-28 w-full bg-base-100 text-base-content placeholder-base-content/50 resize-none" 
                  placeholder="Your message..."
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-3 md:mt-4">
                <button type="submit" className="btn btn-accent btn-sm md:btn-md w-full">
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