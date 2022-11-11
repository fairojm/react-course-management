import { AboutPage } from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./common/NotFound";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  //   function getPage() {
  //     let path = window.location.pathname;
  //     if (path === "/courses") return <CoursesPage />;
  //     else if (path === "/about") return <AboutPage />;
  //     else return <HomePage />;
  //   }
  return (
    <>
      <ToastContainer autoClose="3000" hideProgressBar />
      <Header />
      <div className="container-fluid">
        {
          /* NORMAL ROUTING
      getPage()*/

          /**REACT ROUTING */
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/course" element={<ManageCoursePage />} />
            <Route path="/course/:slug" element={<ManageCoursePage />} />
            <Route
              path="/about-page"
              element={<Navigate replace to="/about" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        }
      </div>
    </>
  );
};
