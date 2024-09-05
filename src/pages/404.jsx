import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="py-6">Looks like this page doesn't exist.</p>
            <button className="btn btn-primary">
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FourOhFour;
