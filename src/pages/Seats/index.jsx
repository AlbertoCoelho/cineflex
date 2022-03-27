import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import Seat from "../../components/Seat";
import UserData from "../../components/UserData";

import { MainContainer } from '../MovieChoice/style';
import { Title,SeatsContainer,SeatSignageContainer,SeatSignage,SeatStatus,SeatSignageText,Footer,MovieImageBox,FooterText } from './style';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { getSeats } from "../../services/api";


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#FFFFFF',
  },
}));

const Seats = () => {
  const { sessionId } = useParams();
  const [seats,setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    (async () => {
      const response = await getSeats(sessionId);
      setSeats(response.data);
    }) (); 
  }, [sessionId]);

  if (seats === null) {
    return (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    ); 
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

      <Footer>
        <MovieImageBox>
          <img src={seats.movie.posterURL} alt="FooterImage" />
        </MovieImageBox>
        <FooterText>
          <h3>{seats.movie.title}</h3>
          <h3>{seats.day.weekday} - {seats.name}</h3>
        </FooterText>
      </Footer>

    </MainContainer>
  );
}

export default Seats;