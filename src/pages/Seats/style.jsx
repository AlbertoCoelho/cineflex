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

export {
  Title,
  SeatsContainer
}