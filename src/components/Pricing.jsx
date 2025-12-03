import React from "react";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Choose your plan</h2>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Basic</h3>
          <h1>₹499 / month</h1>
          <ul>
            <li>Access to all courses</li>
            <li>Community support</li>
            <li>Certificates included</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>

        <div className="price-card highlight">
          <h3>Standard</h3>
          <h1>₹999 / month</h1>
          <ul>
            <li>Access to all courses</li>
            <li>Premium support</li>
            <li>Live mentoring</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>

        <div className="price-card">
          <h3>Premium</h3>
          <h1>₹1200 / month</h1>
          <ul>
            <li>Everything in Standard</li>
            <li>1-on-1 coaching</li>
            <li>Portfolio review</li>
          </ul>
          <button className="choose-btn">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
