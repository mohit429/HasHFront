import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="flex contact-section py-20">
      <div className="container mx-auto text-center lg:text-left px-5 lg:px-20">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">Get in touch with any questions or collaborations!</p>
        <form className="max-w-lg mx-auto lg:mx-0">
          <input type="text" className="input-field mb-4 w-full p-3 border rounded-md" placeholder="Your Name" required />
          <input type="email" className="input-field mb-4 w-full p-3 border rounded-md" placeholder="Your Email" required />
          <textarea className="textarea-field w-full p-3 border rounded-md mb-4" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn-primary w-full lg:w-auto px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
