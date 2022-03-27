import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeReservation } from "../../services/api";

import { UserDataContainer,Wrapper,TitleInput } from "./style";

import Input from "../Input";
import Button from "../Button";

const UserData = (props) => {
  const [userName,setUserName] = useState("");
  const [userCPF,setUserCPF] = useState("");

  const navigate = useNavigate();

  const userInfo = {
    ids: props.selectedSeats,
    name: userName,
    cpf: userCPF
  }

  const dataPackage = {name:props.movieName, date:props.movieDate, time:props.movieTime, userInfo:{userInfo}};

  const reservation = async (userInfo) => {
    try {
      const response = await makeReservation(userInfo);
      console.log(response);
      navigate("/sucess", {state: dataPackage });
    } catch {
        alert("There was an error in the data, please fill it in again!");
    }
  }

  const submit = () => {
    reservation(userInfo);
  }

  return (
    <>
      <UserDataContainer>
        <Wrapper>
          <TitleInput>
            <span>Nome do comprador:</span>
            <Input onChange={ (e) => setUserName(e.target.value) } placeholder="Digite seu nome..." value={userName}/>
          </TitleInput>
        </Wrapper>
        <Wrapper>
          <TitleInput>
            <span>CPF do comprador:</span>
            <Input onChange={ (e) => setUserCPF(e.target.value) } placeholder="Digite seu CPF..." value={userCPF}/>
          </TitleInput>
        </Wrapper>
      </UserDataContainer>

      <Button onClick={submit}>Reservar assento(s)</Button>
    </>
  );
}

export default UserData;