import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import Seat from "../../components/Seat";
import UserData from "../../components/UserData";

import { MainContainer } from '../MovieChoice/style';
import { Title,SeatsContainer,SeatSignageContainer,SeatSignage,SeatStatus,SeatSignageText } from './style';

import { getSeats } from "../../services/api";


const Seats = () => {
  const { sessionId } = useParams();
  const [seats,setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect( () => {
    (async () => {
      const response = await getSeats(sessionId);
      setSeats(response.data);
    }) (); 
  }, [sessionId]);

  if (seats === null) {
    return <p>Carregando...</p>    
  }

  return (
    <MainContainer>
      <Title>
        <h1>Selecione o(s) assento(s)</h1>
      </Title>
      <SeatsContainer>
        {
          seats.seats.map( item => (
            <Seat
            key={item.id}
            id={item.id}
            name={item.name}
            isAvailable={item.isAvailable}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats} />
          ))
        }
      </SeatsContainer>

      <SeatSignageContainer>
        <SeatSignage>
          <SeatStatus className='selected' />
          <SeatStatus className='available'/>
          <SeatStatus className='unavailable'/>
        </SeatSignage>
        <SeatSignageText>
          <span>Selecionado</span>
          <span>Disponível</span>
          <span>Indisponível</span>
        </SeatSignageText>
      </SeatSignageContainer>

      <UserData
       selectedSeats={selectedSeats} 
       movieName={seats.movie.title}
       movieDate={seats.day.date}
       movieTime={seats.name}   
      />

    </MainContainer>
  );
}

export default Seats;