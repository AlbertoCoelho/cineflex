import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 30px;
`

const SeatsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-bottom: 13px;
`

const SeatSignageContainer = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-bottom: 44px;
`

const SeatSignage = styled.div`
  height: 50%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .selected {
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
  }

  .available {
    background: #C3CFD9;
    border: 1px solid #7B8B99;
  }

  .unavailable {
    background: #FBE192;
    border: 1px solid #F7C52B;
  }
`

const SeatStatus = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 12px;
`

const SeatSignageText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #4E5A65;
`

const Footer = styled.div`
  width: 100%;
  height: 115px;

  display: flex;
  align-items: center;
  gap: 15px;

  background-color: #DFE6ED;

  position: fixed;
  bottom: 0;
  left: 0;
`

const MovieImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 64px;
  height: 75%;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  background-color: #FFFFFF;

  margin-left: 15px;

  img {
    height: 90%;
    width: 80%;
  }
`

const FooterText = styled.div`

`

export {
  Title,
  SeatsContainer,
  SeatSignageContainer,
  SeatSignage,
  SeatStatus,
  SeatSignageText,
  Footer,
  MovieImageBox,
  FooterText
}