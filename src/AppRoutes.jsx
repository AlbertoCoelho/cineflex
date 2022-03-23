import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import MovieChoice from "./pages/MovieChoice";

import GlobalStyle from "./styles/GlobalStyle";



const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MovieChoice />}/>

      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default AppRoutes;