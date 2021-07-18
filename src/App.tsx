import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { useAuth } from "./queries/getAuth";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { BgTiles } from "./components/BgTiles/BgTiles";

function App() {
  const {
    signIn,
    signOut,
    results: { data: authData, loading, error },
  } = useAuth();

  return (
    <div className="App">
      {/* <BgTiles /> */}
      {authData ? (
        <Dashboard signout={signOut} auth={authData} />
      ) : (
        <LoginPage
          onSubmit={(d: Parameters<typeof signIn>[0]) => signIn(d)}
          submitting={loading}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
