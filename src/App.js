import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import Movie from "./pages/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
