import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 51px;

  font-family: 'Roboto';
  font-style: italic;
  font-size: 18px;
  font-weight: 400;

  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 3px;

  &::placeholder{
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #AFAFAF;
  }
`

export default Input;