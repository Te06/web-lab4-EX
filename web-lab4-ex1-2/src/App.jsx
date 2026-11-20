
import { Routes, Route } from "react-router";
import PeopleLayout from "./PeopleLayout";
import PersonDetail from "./PersonDetail";
import "./App.css";

const people = [
  { id: "1", name: "Pham Ngoc Thach", role: "Multi-trillionaire" },
  { id: "2", name: "Dang Hoang Nguyen", role: "Robber" },
  { id: "3", name: "Nguyen Phan Hoang Quan", role: "Hacker" },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<PeopleLayout people={people} />}>
        <Route
          index
          element={<p>Select a person to view details.</p>}
        />
        <Route
          path="people/:id"
          element={<PersonDetail people={people} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
