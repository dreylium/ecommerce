import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="grid place-items-center py-36 text-center">
      <h1 className="mb-10 font-heading-medium text-110">404 Not Found</h1>
      <p className="mb-20">Your visited page not found. You may go home page.</p>
      <Link to="/" className="rounded bg-clr-ButtonRed px-12 py-4 font-medium text-white">
        Back to home page
      </Link>
    </div>
  );
};
export default NotFound;
