import React from "react";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import TicketList from "./page/ticket-list/TicketList";
// import AddTicketsPage from "./page/new_ticket/AddTicketsPage";
// import Dashboard from "./page/dashboard/Dashboard";
// import EntryPage from "./page/entry/EntryPage";

function App() {
  return (
    <div>
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicketsPage /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
