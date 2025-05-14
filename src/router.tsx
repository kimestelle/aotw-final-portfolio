import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Upstairs from "./pages/Upstairs";
import NotFound from "./pages/NotFound";
import Modal from "./components/Modal";

const AppRouter = () => {
  return (
    <Router>
      <Modal/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upstairs" element={<Upstairs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
