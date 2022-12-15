import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "50px",
      }}
    >
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;
