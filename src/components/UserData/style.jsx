import styled from "styled-components";

const UserDataContainer= styled.div`
  height: 160px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 57px;
  gap: 7px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
`

const TitleInput = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
  }
`

export {
  UserDataContainer,
  Wrapper,
  TitleInput
}