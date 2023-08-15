import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"; //we have imported browserRouter in index.js file
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import LoginButton from "./LoginButton";
import SignInButton from "./SignInButton";

export default function Navbar() {
  return (

      <nav className="nav">
        <div className="landt">
          <div className="logo"> 
          <Link to="/LeftSlide">< DehazeRoundedIcon /></Link>
          </div>
          <div className="title"><Link to="/"> Doc-Print</Link></div>
        </div>
        <div className="list">
          <CustomLink to="/Home">Home</CustomLink>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/Contact">Contact</CustomLink>
          <CustomLink to="/Shop">Shop</CustomLink>
          <CustomLink to="/Repair">Repair</CustomLink>
          <LoginButton/>
          <SignInButton/>
          <div className="left-logo"> <DehazeRoundedIcon /></div>
        </div>
      </nav>
  );
}



function CustomLink({ to, children, ...props }) {
   
  // and useResolvedPath  / takes a absolute path and combins 
  // with current path and gives the full actual path
  const resolvedPath = useResolvedPath(to);

  // useMatch is used to compare to property 
  // passing as an object and end ture will compare entier path 
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
