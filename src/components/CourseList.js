import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import CourseStore from "../stores/courseStore";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CourseList(props) {
  let [alert, setAlert] = useState(false);
  let courseIdtoDelete = null;

  function AlertDialog(title, msg) {
    confirmAlert({
      title: title,
      message: msg,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            return handleDelete();
          },
        },
        {
          label: "No",
          onClick: () => {
            return "";
          },
        },
      ],
    });
  }
  function handleDelete() {
    props.onDelete(courseIdtoDelete);
  }

  // useEffect(() => {
  //   CourseStore.addChangeListener(onChange);
  //   // return () => CourseStore.removeChangeListener(onChange);
  //   console.log("list", CourseStore.getAlertResponse());
  // }, CourseStore._alertRespone);
  // function onChange() {
  //   setAlert(CourseStore.getAlertResponse());
  //   console.log("list", CourseStore.getAlertResponse());
  // }
  return (
    <table className="table">
      {alert === true ? <div>I am the alert</div> : ""}
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setAlert(
                      AlertDialog("Confirm", "Are you sure you want to delete?")
                    );
                    courseIdtoDelete = course.id;
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  courses: [],
};
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

export default CourseList;
