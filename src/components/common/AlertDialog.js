import { confirmAlert } from "react-confirm-alert";
// import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { setAlertRes } from "../../actions/CourseAction";

// class AlertDialog extends React.Component {
function AlertDialog(title, msg) {
  confirmAlert({
    title: title,
    message: msg,
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          return setAlertRes(true);
        },
      },
      {
        label: "No",
        onClick: () => {
          return setAlertRes(false);
        },
      },
    ],
  });
}
// }

export default AlertDialog;
