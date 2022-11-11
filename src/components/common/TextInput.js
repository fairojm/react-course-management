import React from "react";
import { PropTypes } from "prop-types";

function TextInput(props) {
  let wrapperClass = "form-group";
  //   console.log(props.error.length);
  //   if (props.error && props.error.length > 0) {
  //     // wrapperClass += " was-validated";
  //   }
  return (
    <div className={wrapperClass}>
      <label className="" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="field">
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
          required={props.required === "true" && true}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};
TextInput.defaultProps = {
  //   error: "",
};

export default TextInput;
