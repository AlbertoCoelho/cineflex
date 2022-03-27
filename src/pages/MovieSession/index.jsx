import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { MainContainer } from '../MovieChoice/style';
import { Title,Footer,MovieImage,MovieTitle } from './style';

import SessionCard from '../../components/SessionCard';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { getSession } from '../../services/api';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#FFFFFF',
  },
}));

const MovieSession = () => {
  const [session,setSession] = useState(null);
  const { movieId } = useParams();
  const classes = useStyles();

  useEffect( () => {
    (async () => {
      const response = await getSession(movieId);
      setSession(response.data);
    }) (); 
  }, [movieId]);

  if(session === null){
    return (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <MainContainer>
      <Title>
        <h1>Selecione o horário</h1>
      </Title>

    {
      session.days.map( item => (
        <SessionCard 
          weekday={item.weekday} 
          date={item.date} 
          showtimes={item.showtimes}
          key={item.id}
        />
      ))
    }

      <Footer>
        <MovieImage>
          <img src={session.posterURL} alt="MovieImage" />
        </MovieImage>
        <MovieTitle>
          <h3>{session.title}</h3>
        </MovieTitle>
      </Footer>

  </MainContainer>
  );
}

export default MovieSession;