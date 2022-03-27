import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgChevronLeftO } from 'react-icons/cg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container >
      <span onClick={() => navigate("/")}>CINEFLEX</span>
      { window.location.pathname === "/" ? "" : 
      <div className="return">
        <IconContext.Provider value={{ color: "#000000", className: "global-class-name", size: "3em" }}>
          <CgChevronLeftO onClick={() => navigate(-1)}/>
        </IconContext.Provider>
      </div>
      }
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 67px;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: #C3CFD9;

  span {
    color: #E8833A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
  }

  a {
    text-decoration: none;
  }

  .return {
    position: absolute;
    left: 20px;
    bottom: 5px;
  }
`

export default Header;