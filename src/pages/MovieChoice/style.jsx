import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0 15px 125px 15px;

  h1{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
  }

  h2 {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: #293845;
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
  }
`

const Title = styled.div`
  height: 9vh;
  width: 100%;
  background-color: #fffFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const ContainerImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 145px;
  height: 210px;

  margin-bottom: 27px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  cursor: pointer;

  a {
    width: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    filter: brightness(0.9);
  }

  img {
    height: 90%;
  }
`

export {
  MainContainer,
  Title,
  Wrapper,
  ContainerImages,
  Image
}

