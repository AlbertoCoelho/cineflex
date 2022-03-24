import styled from 'styled-components';

const Title = styled.div`
   height: 9vh;
   width: 100%;
   background-color: #fffFFF;
   display: flex;
   justify-content: center;
   align-items: center;

   margin: 12px 0px 25px;
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

const MovieImage = styled.div`
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

const MovieTitle = styled.div`
  color: #293845;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`

 export {
   Title,
   Footer,
   MovieImage,
   MovieTitle
 }
