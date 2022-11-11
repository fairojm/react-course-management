import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as courseApi from "../api/courseApi";
import { getAuthors } from "../api/authorApi";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((loadedCourses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: loadedCourses,
    });
  });
}

export function loadAuthors() {
  return getAuthors().then((res) => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_AUTHORS,
      authors: res,
    });
  });
}

export function _deleteCourse(courseId) {
  return courseApi.deleteCourse(courseId).then((res) => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId,
      response: res,
    });
  });
}
export function setAlertRes(response) {
  dispatcher.dispatch({
    actionType: actionTypes.ALERT_RESPONSE,
    alertResponse: response,
  });
}
