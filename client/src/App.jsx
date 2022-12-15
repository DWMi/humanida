import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import UserProvider from "./context/userProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
