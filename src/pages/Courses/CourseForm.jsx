import React from "react";

const CourseForm = () => {
  return (
    <div className="glass-card course-form">
      <h2>Browse courses by category</h2>

      <label>Choose Category</label>
      <select>
        <option>Web Development</option>
        <option>UI/UX Design</option>
        <option>Mobile Development</option>
        <option>Data Science</option>
        <option>Cloud Computing</option>
      </select>

      <label>Level</label>
      <select>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <label>Description</label>
      <textarea
        rows="5"
        placeholder="Short description of what you want to learn..."
      ></textarea>

      <button className="primary-btn">Show Courses</button>

      <p className="note">* More filters coming soon</p>
    </div>
  );
};

export default CourseForm;
