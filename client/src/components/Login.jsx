import { useMantineTheme } from "@mantine/core";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "50px",
        gap: "100px",
        paddingBottom: "100px",
      }}
    >
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;
