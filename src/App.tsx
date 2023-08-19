import { Route, Routes } from "react-router-dom";
import "./App.css";
import WorkspacePage from "./pages/WorkspacePage/WorkspacePage";
import WorkspaceContextLayout from "./components/WorkspaceContextLayout";

const ROOT_PATH = "/DONUT-code/";

function App() {
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<WorkspaceContextLayout />}>
        <Route index element={<WorkspacePage />} />
      </Route>
    </Routes>
  );
}

export default App;
