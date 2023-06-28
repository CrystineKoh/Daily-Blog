import "./Topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Logo from "../../assets/Crystine-Logo.png";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5003/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <img className="logo" src={Logo} alt="" />
        {/* <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li> */}
          {/* <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            {user && (
              <Link className="link" to="/write">
                WRITE
              </Link>
            )}
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to={"/settings"}>
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                className="link"
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link
                className="link"
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
