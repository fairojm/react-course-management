import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import { PropTypes } from "prop-types";
import CourseStore from "../stores/courseStore";
import { loadAuthors } from "../actions/CourseAction";

const CourseForm = (props) => {
  let [authorsList, setauthorsList] = useState([
    {
      id: "",
      label: "Select",
    },
    ...CourseStore.getAuthors(),
  ]);

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getAuthors().length === 0) loadAuthors();
    return () => CourseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setauthorsList((state) => [...state, ...CourseStore.getAuthors()]);
  }

  //   console.log(authorsList);
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        type="text"
        id="title"
        name="title"
        label="Title"
        className="form-control"
        onChange={props.onChange}
        value={props.course.title}
        // required="true"
        error={props.errors.title}
      />
      <SelectInput
        className="form-control"
        id="authorId"
        name="authorId"
        label="Author"
        options={authorsList}
        onChange={props.onChange}
        value={`${props.course.authorId}` || ""}
        // required="true"
        error={props.errors.authorId}
      />
      <TextInput
        type="text"
        id="category"
        name="category"
        label="Category"
        className="form-control"
        onChange={props.onChange}
        value={props.course.category}
        // required="true"
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
