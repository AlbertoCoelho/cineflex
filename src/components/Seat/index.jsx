import { useState } from "react";
import styled from 'styled-components';

const Seat = (props) => {
  const [seatAvailable,setSeatAvailable] = useState(false);

  const {id,name,isAvailable,selectedSeats,setSelectedSeats} = props;

  function selectSeat (){
    seatAvailable ? setSeatAvailable(false) : setSeatAvailable(true);
    if(selectedSeats.find(seatId => seatId === id )){
      selectedSeats.splice(selectedSeats.indexOf(id),1);
    } else {
      selectedSeats.push(id);
    }
    setSelectedSeats([...selectedSeats]);
  }

    if(isAvailable !== true){
        return (
            <SeatUnavailable onClick={( () => alert("Esse assento não está disponível"))}>
                <span>{name}</span>
            </SeatUnavailable>
        );
    } else {
        return (
            <SeatAvailable color={seatAvailable} onClick={selectSeat}>
                <span>{name}</span>
            </SeatAvailable>
        );
    }

}

const SeatAvailable = styled.div(({ color }) => `
width: 26px;
height: 26px;
background-color: ${ color ? '#45BDB0' : '#C3CFD9'};
border: ${ color ? '1px solid #45BDB0' : '1px solid #808F9D'};
border-radius: 12px;

display: flex;
justify-content: center;
align-items: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 11px;

cursor: pointer;
`)

const SeatUnavailable = styled.div`
width: 26px;
height: 26px;
background-color: #FBE192;
border: 1px solid #F7C52B;

border-radius: 12px;

display: flex;
justify-content: center;
align-items: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 11px;

cursor: pointer;
` 

export default Seat;