import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="mb-6 text-green-800">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className=" btn btn-primary text-white font-semibold rounded-lg shadow-md transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}