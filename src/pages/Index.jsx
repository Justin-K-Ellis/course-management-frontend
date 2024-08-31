import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <div className="hero min-h-full">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Course Management</h1>
            <p className="py-6">
              Here you can manage courses, students, and instructors.
            </p>
            <div className="flex flex-row gap-2 justify-center">
              <button className="btn btn-primary">
                <Link to={"/courses"}>Courses</Link>
              </button>
              <button className="btn btn-secondary">
                <Link to={"/students"}>Students</Link>
              </button>
              <button className="btn btn-accent">
                <Link to={"/instructors"}>Instructors</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
