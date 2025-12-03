import React from "react";

const CourseHighlights = () => {
  return (
    <div className="glass-card highlights-box">
      <h3>Popular Courses</h3>

      <ul>
        <li>Full Stack Web Development</li>
        <li>UI/UX Design Masterclass</li>
        <li>React & Advanced Frontend</li>
        <li>Data Science with Python</li>
        <li>Android App Development</li>
      </ul>

      <button className="primary-btn">View All</button>
    </div>
  );
};

export default CourseHighlights;
