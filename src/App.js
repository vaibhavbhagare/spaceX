import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainDashboard from "./components/MainDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />}></Route>
          <Route path="dashboard" element={<MainDashboard />}>
            <Route
              path=":year?/:lunch?/:landing?"
              element={<MainDashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
