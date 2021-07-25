import React from "react";
import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { useAuth } from "./queries/getAuth";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const {
    signIn,
    signOut,
    //results: { data: authData, loading, error },
  } = useAuth();
  const loading = false;
  const error = undefined;
  const authData = {
    weddingAcceptedCount: 2,
    weddingDeclinedCount: 0,
    id: 22,
    displayName: "Mr Juhan Kim ",
    recordName: "Juhan Kim",
    zip: "68130",
    weddingAccess: true,
    receptionAccess: true,
    inviteeStatus: "family",
    familyNames: [
      "오마하 언니",
      "오마하 형부",
      "Ms Sua Kim",
      "Mr Juhan Kim ",
      "Esteemed Ehan Kim",
    ],
    familyKey: "Omaha Family",
  };

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
