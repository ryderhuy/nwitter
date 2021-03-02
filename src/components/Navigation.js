import react from "react";
import { Link } from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile";

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/editprofile">Edit Profile</Link>
        </li>
        <li>
          <Link to="/uploadfile">Upload File</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
