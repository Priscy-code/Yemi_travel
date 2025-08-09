import { BrowserRouter, Route, Routes } from "react-router-dom";
import YemrichLandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YemrichLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
