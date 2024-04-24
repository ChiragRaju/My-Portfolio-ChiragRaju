import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import ApplicationLayout from "./components/ApplicationLayout";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <ApplicationLayout>
        <MainLayout />
      </ApplicationLayout>
    </Router>
  );
}

export default App;
