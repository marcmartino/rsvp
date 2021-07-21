import React from "react";
import "./App.css";
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
      {/* <BgTiles /> */}
      {authData ? (
        <Dashboard
          refetchAuth={() =>
            signIn({ name: authData.recordName, zip: authData.zip }).then(
              () => undefined
            )
          }
          signout={signOut}
          auth={authData}
        />
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
