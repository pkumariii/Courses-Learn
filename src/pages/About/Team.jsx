import React from "react";

const Team = () => {
  return (
    <section className="team-section glass-card">
      <h2>Meet the Team</h2>

      <div className="team-grid">

        <div className="team-card">
          <h4>Alex Johnson</h4>
          <p>Lead Instructor – Full Stack Engineering</p>
        </div>

        <div className="team-card">
          <h4>Lisa Martinez</h4>
          <p>Curriculum Designer – UX & Product</p>
        </div>

        <div className="team-card">
          <h4>Sam Peter</h4>
          <p>Career Mentor – Interview & Resume Coach</p>
        </div>

      </div>
    </section>
  );
};

export default Team;
