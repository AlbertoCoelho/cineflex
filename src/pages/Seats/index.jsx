import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import Seat from "../../components/Seat";

import { MainContainer } from '../MovieChoice/style';
import { Title,SeatsContainer } from './style';

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
    </MainContainer>
  );
}

export default Seats;