import React from "react";
import CoursesHeader from "./CoursesHeader";
import CourseForm from "./CourseForm";
import CourseInfo from "./CourseInfo";
import CourseHighlights from "./CourseHighlights";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-page">
      <CoursesHeader />

      <div className="courses-layout">
        <CourseForm />
        <div className="right-side">
          <CourseInfo />
          <CourseHighlights />
        </div>
      </div>
    </div>
  );
};

export default Courses;
