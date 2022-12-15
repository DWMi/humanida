import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../context/userProvider";
import { makeRequest } from "../functions/makeRequest";

const RegisterForm = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    description: "",
    password: "",
  });
  const [error, setError] = useState(undefined);
  const { setUser } = useContext(userContext);

  const setValue = (event, field) => {
    let fieldsCopy = { ...fields };

    if (field === "name") {
      fieldsCopy.name = event.target.value;
    }
    if (field === "email") {
      fieldsCopy.email = event.target.value;
    }
    if (field === "description") {
      fieldsCopy.description = event.target.value;
    }
    if (field === "password") {
      fieldsCopy.password = event.target.value;
    }

    setFields(fieldsCopy);
  };

  const register = async () => {
    if (
      fields.name.length > 1 &&
      fields.email.length > 1 &&
      fields.description.length > 1 &&
      fields.password.length > 1
    ) {
      let body = JSON.stringify(fields);
      const response = await makeRequest(
        "/api/user/registeruser",
        "POST",
        body
      );
      if (response) {
        setUser(response);
        window.location.href = "/";
      } else {
        setError("Någonting gick fel");
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
        maxWidth: "200px",
        gap: "20px",
      }}
    >
      <h2>Registrera konto:</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Namn"
          onChange={(event) => setValue(event, "name")}
        />
        <input
          type="email"
          placeholder="Epost"
          onChange={(event) => setValue(event, "email")}
        />
        <textarea
          placeholder="Beskriv dig själv kort"
          style={{ resize: "none", width: "200px", height: "100px" }}
          onChange={(event) => setValue(event, "description")}
        />
        <input
          type="password"
          placeholder="Välj lösenord"
          onChange={(event) => setValue(event, "password")}
        />
      </div>
      <button onClick={() => register()}>Registrera</button>
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
  );
};

export default RegisterForm;
