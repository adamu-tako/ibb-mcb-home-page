import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsCarousel from "./components/NewsCarousel";
import { Route, Routes } from "react-router-dom";
import FacultyMembers from "./components/FacultyMembers";

function App() {
  return (
    <div className="max-w-[100vw]">
      <Header />
      <Routes>
        <Route path="/" element={<NewsCarousel />} />
        <Route path="/faculty" element={<FacultyMembers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
