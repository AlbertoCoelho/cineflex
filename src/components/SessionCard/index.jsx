import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SessionCard = ({ weekday, date, showtimes }) => {
  const navigate = useNavigate();

  return (
    <CardSession>
      <SessionTitle>
        <h2>{weekday} - {date}</h2>
      </SessionTitle>
      <TimeBox>
        {
          showtimes.map( item => (
            <ButtonContainer key={item.id}>
              <button onClick={() => navigate(`/assentos/${item.id}`)}>{item.name}</button>
            </ButtonContainer>
          ))
        }
      </TimeBox>
    </CardSession>
  );
}

const CardSession = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0px 0px 23px 23px;
`

const SessionTitle = styled.div`
  width:100%;
  display: flex;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #293845;
`

const TimeBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 3vh;
`

const ButtonContainer = styled.div`
  width: 17%;
  height: 50%;

  display: flex;
  justify-content: start;
  align-items: center;

  a {
    width:100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 43px;
    background-color: #E8833A;

    cursor: pointer;

    border-radius: 3px;
    border: none;
    color: #FFF;
  }
`

export default SessionCard;