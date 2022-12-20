import LOGO from "../assets/LOGO.svg";
import { HiUserCircle } from "react-icons/hi2";
import "./styles/header.css";
import { userContext } from "../context/userProvider";
import { useContext } from "react";
import { makeRequest } from "../functions/makeRequest";

const Header = () => {
  const { getUser, setUser } = useContext(userContext);

  const logout = async () => {
    let response = await makeRequest("/api/user/logout", "GET", undefined);
    if (response) {
      location.reload();
    }
  };

  return (
    <header className="header">
      <div className="headerCon">
        <div className="logo">
          <img
            src={LOGO}
            alt="just a logo"
            className="icon"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <div className="iconCon">
          {getUser ? (
            <a style={{ cursor: "pointer" }} onClick={logout}>
              Logga ut
            </a>
          ) : undefined}
          <a href={getUser ? `/min-sida/${getUser.ID}` : "/login"}>
            <HiUserCircle
              size={30}
              color={getUser ? "green" : "#A2B8C8"}
              className="icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
