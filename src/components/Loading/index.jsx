import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from 'styled-components';

const Loading = () => {
  return (
    <Spinner align='center'>
      <Loader 
        type="ThreeDots"
        color="#2BAD60" 
        height="100" 
        width="100"
        // timeout={3000} //3 secs
      />
    </Spinner>
  );
}

const Spinner = styled.div`
  width: 100%;
  height: 100%;
`

export default Loading;