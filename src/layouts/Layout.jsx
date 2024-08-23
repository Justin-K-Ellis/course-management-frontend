const Layout = () => {
  return (
    <div className="navbar bg-primary-content">
      <div className="navbar-start font-bold text-3xl hover:opacity-80">
        <a href="/">Course Management</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li className="text-primary">
            <a href="/courses">Courses</a>
          </li>
          <li className="text-secondary">
            <a href="/students">Students</a>
          </li>
          <li className="text-accent">
            <a href="/instructors">Instructors</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
