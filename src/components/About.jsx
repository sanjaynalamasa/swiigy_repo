
const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Swiggy</h1>
        <p>Delivering food happiness across India.</p>
      </section>
~
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At Swiggy, our mission is to provide fast, reliable, and delightful food delivery experiences to our customers. We aim to connect people with the best local restaurants and deliver their favorite meals right to their doorstep.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>No Minimum Order</li>
          <li>Live Order Tracking</li>
          <li>Lightning-Fast Delivery</li>
        </ul>
      </section>

      <section className="about-footer">
        <p>&copy; {new Date().getFullYear()} Swiggy. All rights reserved.</p>
      </section>
    </div>
  );
};

export default About;
