import { Route, Routes } from "react-router-dom";
import "./App.css";
import WorkspacePage from "./pages/WorkspacePage/WorkspacePage";
import WorkspaceContextLayout from "./components/WorkspaceContextLayout";

function App() {
  return (
    <Routes>
      <Route path="/DONUT-code/" element={<WorkspaceContextLayout />}>
        <Route index element={<WorkspacePage />} />
      </Route>
    </Routes>
  );
}

export default App;
