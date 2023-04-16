import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FacultyMembers from "./pages/FacultyMembers";
import Homepage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="max-w-[100vw]">
      <div className="z-[99]">
        <Header />
      </div>
      <div className="-z-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/faculty" element={<FacultyMembers />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
