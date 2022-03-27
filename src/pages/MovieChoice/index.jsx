import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {MainContainer,Title,Wrapper,ContainerImages,Image} from './style';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { getMovie } from '../../services/api';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#FFFFFF',
  },
}));

const MovieChoice = () => {
  const [images,setImages] = useState([]);

  const navigate = useNavigate();
  const classes = useStyles();

  useEffect( () => {
    (async () => {
      const response = await getMovie();
      setImages(response.data);
    })(); 
  }, []);

  if(images.length === 0){
    return (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

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