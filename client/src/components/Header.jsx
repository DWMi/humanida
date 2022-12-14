import LOGO from "../assets/LOGO.svg";
import { HiUserCircle } from "react-icons/hi2";
import "./styles/header.css";
import { userContext } from "../context/userProvider";
import { useContext } from "react";

const Header = () => {
  const { getUser, setUser } = useContext(userContext);

  return (
    <header className="header">
      <div className="headerCon">
        <div className="logo">
          <img src={LOGO} alt="just a logo" />
        </div>
        <div className="iconCon">
          <a href={getUser ? `/min-sida/${getUser.ID}` : "/login"}>
            <HiUserCircle size={30} color={"#A2B8C8"} className="icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
