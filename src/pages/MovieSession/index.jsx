import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../MovieChoice/style';
import { Title,Footer,MovieImage,MovieTitle } from './style';
import SessionCard from '../../components/SessionCard';

import { getSession } from '../../services/api';

const MovieSession = () => {
  const [session,setSession] = useState(null);

  const { idFilme } = useParams();
  const navigate = useNavigate();

  useEffect( () => {
    (async () => {
      const response = await getSession(idFilme);
      setSession(response.data);
    }) (); 
  }, [idFilme]);

  if(session === null){
    return <span>Carregando...</span>
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