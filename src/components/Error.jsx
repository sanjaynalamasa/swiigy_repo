
import { Link } from 'react-router-dom';  
import { useRouteError } from 'react-router-dom';


const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  );
};

export default Error;
