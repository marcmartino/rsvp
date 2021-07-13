import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { useAuth } from "./queries/getAuth";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const {
    signIn,
    signOut,
    results: { data: authData, loading, error },
  } = useAuth();

  return (
    <div className="App">
      {authData ? (
        <Dashboard auth={authData} />
      ) : (
        <LoginPage
          onSubmit={(d: Parameters<typeof signIn>[0]) => (signIn(d), undefined)}
          submitting={loading}
        />
      )}
    </div>
  );
}

export default App;
