import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../context/userProvider";
import { makeRequest } from "../functions/makeRequest";

const LoginForm = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [error, setError] = useState(undefined);
  const { setUser } = useContext(userContext);

  const setValue = (event, field) => {
    let fieldsCopy = { ...fields };

    if (field === "email") {
      fieldsCopy.email = event.target.value;
    }
    if (field === "password") {
      fieldsCopy.password = event.target.value;
    }

    setFields(fieldsCopy);
  };

  const login = async () => {
    if (fields.email.length > 1 && fields.password.length > 1) {
      let body = JSON.stringify(fields);
      const response = await makeRequest("/api/user/login", "POST", body);
      if (response === "Fel användarnamn eller lösenord") {
        setError(response);
      } else {
        setUser(response);
        window.location.href = "/";
      }
    } else {
      setError("Vänligen fyll i fälten korrekt");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "20px",
      }}
    >
      <h2>Logga in:</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="email"
          placeholder="Epost"
          onChange={(event) => {
            setValue(event, "email");
          }}
        />
        <input
          type="password"
          placeholder="Lösenord"
          onChange={(event) => {
            setValue(event, "password");
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => login()}>Logga in</button>
        {error ? (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginTop: "5px",
              maxWidth: "200px",
            }}
          >
            {error}
          </p>
        ) : undefined}
      </div>
    </div>
  );
};

export default LoginForm;
