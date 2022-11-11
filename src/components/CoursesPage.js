/** USING ARROW FUNCTION AND USE STATE AND USEEFFECT HOOKS */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import * as courseAction from "../actions/CourseAction";
import { toast } from "react-toastify";

const CoursesPage = () => {
  const [courses, setCourses] = useState(CourseStore.getCourses());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getCourses().length === 0) courseAction.loadCourses();
    return () => CourseStore.removeChangeListener(onChange); // clear listener when the page is leaving
  }, []);

  function handleDelete(courseIdtoDelete) {
    console.log("Inside delete", courseIdtoDelete);
    courseAction._deleteCourse(courseIdtoDelete).then((res) => {
      toast.success("Deleted Successfully");
    });
  }

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  return (
    <>
      <h1>Courses List</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} alert={false} onDelete={handleDelete} />
    </>
  );
};
export default CoursesPage;

/** USING CLASS ANS SET STATE AND COMPONENET DID MOUNT LIFECYCLE */
/**import React from "react";
import { getCourses } from "../api/courseApi";

export default class CoursesPage extends React.Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    getCourses().then((courses) => {
      this.setState({ courses });
      console.log(courses);
    });
  }
  render() {
    return (
      <>
        <h1>Courses List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.title}</td>
                  <td>{val.authorId}</td>
                  <td>{val.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }

  //   renderTbData(val) {
  //     return (
  //       <tr>
  //         <td>{val.title}</td>
  //         <td>{val.authorId}</td>
  //         <td>{val.category}</td>
  //       </tr>
  //     );
  //   }
}
*/
