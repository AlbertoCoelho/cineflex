import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {MainContainer,Title,Wrapper,ContainerImages,Image} from './style';

import { getMovie } from '../../services/api';

const MovieChoice = () => {
  const [images,setImages] = useState([]);

  const navigate = useNavigate();

  useEffect( () => {
    (async () => {
      const response = await getMovie();
      setImages(response.data);
    })(); 
  }, []);

  return (
    <MainContainer>
      <Title>
        <h1>Selecione o filme</h1>
      </Title>
      <Wrapper>
        <ContainerImages>
          {
            images.map( image => (
              <Image key={image.id} onClick={() => navigate(`/sessions/${image.id}`)}>
                <img src={image.posterURL} alt="ImageURL" />
              </Image>
            ))
          }
        </ContainerImages>
      </Wrapper>
    </MainContainer>
  );
}

export default MovieChoice;