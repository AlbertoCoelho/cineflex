import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import MovieChoice from "./pages/MovieChoice";
import MovieSession from "./pages/MovieSession";
import Seats from "./pages/Seats";
import Sucess from "./pages/Sucess";

import GlobalStyle from "./styles/GlobalStyle";



const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MovieChoice />} />
        <Route exact path="/sessions/:movieId" element={<MovieSession />} />
        <Route exact path="/seats/:sessionId" element={<Seats />} />
        <Route exact path="/sucess" element={<Sucess />} />

      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default AppRoutes;