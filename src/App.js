import React from "react";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./page/dashboard/Dashboard";
// import EntryPage from "./page/entry/EntryPage";

function App() {
  return (
    <div>
      {/* <EntryPage /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
