

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Swiggy</h1>
        <p>We're here to help you 24/7. Reach out to us anytime.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Swiggy. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Contact;
