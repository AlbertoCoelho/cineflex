import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container >
      <span onClick={() => navigate("/")}>CINEFLEX</span>
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
`

export default Header;