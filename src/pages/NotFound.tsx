
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-4xl font-extrabold">404</h1>
      <p className="mb-8 text-xl">Page not found</p>
      <Link 
        to="/" 
        className="rounded bg-element px-6 py-2 font-semibold shadow-md transition-colors hover:bg-element/90"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
