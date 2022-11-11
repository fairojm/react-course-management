import React from "react";
import { PropTypes } from "prop-types";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          className="form-control"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required === "true" && true}
        >
          {props.options.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.label}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

// SelectInput.defaultProps = {
//   //   options: { id: "", label: "Select" },
// };

export default SelectInput;
