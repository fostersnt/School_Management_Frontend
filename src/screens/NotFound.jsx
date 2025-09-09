import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="notfound-button">
          Go Home
        </Link>
      </div>
    </div>
  );
}
