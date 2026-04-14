import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-9xl font-black text-red-400">404</h1>
      <p className="text-2xl font-bold mt-4">Oops! Page not found...</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-teal-900 text-white rounded-xl font-bold">Back to Home</Link>
    </div>
  );
};

export default NotFound;