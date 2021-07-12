import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { LoginPage } from "./components/LoginPage/LoginPage";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
