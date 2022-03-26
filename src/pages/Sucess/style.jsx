import styled from 'styled-components';

const TitleBox = styled.div`
  height: 9vh;
  width: 100%;
  background-color: #fffFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
  margin-bottom: 60px;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;
  }
`

const ReservationContainer = styled.div`
    width: 100%;
    background-color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-bottom: 72px;
`

const InformationBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  padding-bottom: 40px;
  margin-left: 20px;
`

const Subtitle = styled.div`
  margin-bottom: 12px;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
  
    color: #293845;
  }
`

const Label = styled.div`
  h3{
    font-family: Roboto;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;

    color: #293845;

    padding-bottom: 3px;
  }
`

export {
  TitleBox,
  ReservationContainer,
  InformationBox,
  Subtitle,
  Label
}