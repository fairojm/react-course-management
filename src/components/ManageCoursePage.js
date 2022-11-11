import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseForm from "./CourseForm";
import CourseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/CourseAction";

const ManageCoursePage = (props) => {
  const { slug } = useParams();
  let [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });
  let [errors, setErrors] = useState({
    title: "",
    authorId: "",
    category: "",
  });
  let [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  // function getCourse(tt) {
  //   courseApi.getCourseBySlug(tt).then((res) => {
  //     setCourse(res);
  //   });
  // }

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (courses.length === 0) courseActions.loadCourses();
    else if (slug) setCourse(CourseStore.getCourseBySlug(slug));
    return () => CourseStore.removeChangeListener(onChange);
  }, [slug, courses.length]);

  function onChange() {
    // if (slug) {
    setCourses(CourseStore.getCourses());
    // }
  }
  function IsformInValid() {
    let _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Title is required";
    // console.log(_errors, "E", Object.keys(_errors).length);

    setErrors(_errors);
    return Object.keys(_errors).length > 0;
  }

  function handleChange({ target }) {
    console.log(target.name);
    let updatedValue = { ...course, [target.name]: target.value };
    // if (target.name === "title") {
    //   updatedValue.slug = target.value.split(" ").join("-");
    // }
    setCourse(updatedValue);
    if (course[target.name]) {
      setErrors({ ...errors, [target.name]: "" });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(course);
    if (IsformInValid()) {
      // console.log(errors, "Manager");
      toast.error("Invalid Form");
      return;
    }
    courseActions.saveCourse(course).then((res) => {
      navigate("/courses");
      toast.success("Course Saved");
    });
  }

  return (
    <>
      {slug && false ? (
        <>
          <h2>Manage Course</h2>
          {
            slug
            //   usePrompt("Hello from usePrompt -- Are you sure you want to leave?", isBlocking);
          }
          <br />
          <button className="btn btn-info" onClick={() => navigate(-1)}>
            go back
          </button>
        </>
      ) : (
        <>
          <h2>Add Course</h2>
          <CourseForm
            errors={errors}
            course={course}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};

export default ManageCoursePage;
