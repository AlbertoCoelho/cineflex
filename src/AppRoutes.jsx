import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import MovieChoice from "./pages/MovieChoice";
import MovieSession from "./pages/MovieSession";

import GlobalStyle from "./styles/GlobalStyle";



const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MovieChoice />} />
        <Route exact path="/sessoes/:idFilme" element={<MovieSession />} />

      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default AppRoutes;