import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Chatbot from "./pages/Chatbot.tsx";
import Home from "./pages/Home.tsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chatbot />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
