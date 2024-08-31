import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div className="navbar bg-primary-content">
          <div className="navbar-start font-bold text-3xl hover:opacity-80">
            <Link to={"/"}>Course Management</Link>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li className="text-primary">
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li className="text-secondary">
                <Link to={"/students"}>Students</Link>
              </li>
              <li className="text-accent">
                <Link to={"/instructors"}>Instructors</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto w-11/12 md:w-1/2 mt-4 mb-auto">
          <Outlet />
        </div>
        <footer className="footer bg-neutral-content mt-auto">
          <div className="flex items-center justify-items-center mx-auto">
            <div className="footer-title text-neutral mx-auto p-16">
              Copyright Justin Klitgaard | {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
