import React from "react";

const HomeCourses = () => {
  return (
    <section className="courses">
      <h2>Featured Software Courses</h2>

      <div className="course-grid">
        <div className="course-card">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, JS, and React step by step.</p>
        </div>
        <div className="course-card">
          <h3>UI/UX Design</h3>
          <p>Master wireframes, prototypes, and Figma.</p>
        </div>
        <div className="course-card">
          <h3>Android Development</h3>
          <p>Build Android apps using Java or Kotlin.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
