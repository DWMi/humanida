import React, { useEffect } from "react";
import { useState } from "react";
import { makeRequest } from "../functions/makeRequest";

export const userContext = React.createContext({
  getUser: undefined,
  setUser: () => {},
});

const UserProvider = (props) => {
  const [getUser, setUser] = useState();

  useEffect(() => {
    const sendReq = async () => {
      let response = await makeRequest("/api/user/validate", "GET", undefined);
      if (response != "Ingen användare inloggad") {
        setUser(response);
        return;
      }
      setUser(undefined);
    };

    sendReq();
  }, []);

  return (
    <userContext.Provider value={{ getUser, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
