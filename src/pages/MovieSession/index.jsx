import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { MainContainer,Title } from '../MovieChoice/style';
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
      <h2>Selecione o horário</h2>

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

  </MainContainer>
  );
}

export default MovieSession;