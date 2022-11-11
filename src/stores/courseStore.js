import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

let _courses = [];
let _authors = [];
let _alertRespone = null;
const CHANGE = "change";

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
  emitChange() {
    this.emit(CHANGE);
  }

  getCourses() {
    return _courses;
  }
  getCourseBySlug(slug) {
    return _courses.find((val) => val.slug === slug);
  }
  getAuthors() {
    return _authors;
  }
  getAlertResponse() {
    return _alertRespone;
  }
}

const store = new CourseStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((val) =>
        val.id === action.course.id ? action.course : val
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    case actionTypes.GET_AUTHORS:
      _authors = action.authors.map((val) => {
        return { id: val.id, label: val.name };
      });
      // console.log(_authors, "store");
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter((course) => course.id !== action.courseId);
      store.emitChange();
      break;
    case actionTypes.ALERT_RESPONSE:
      _alertRespone = action.alertResponse;
      console.log("Alert", _alertRespone);
      break;
    default:
  }
});

export default store;
