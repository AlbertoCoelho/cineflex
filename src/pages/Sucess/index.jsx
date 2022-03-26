import { useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../MovieChoice/style";
import { TitleBox,ReservationContainer,InformationBox,Subtitle,Label } from "./style";

import Button from "../../components/Button";

const Sucess = () => {
  const { name,date,time,userInfo } = useLocation().state;
  const seats = userInfo.userInfo.ids;
  const navigate = useNavigate();

  return(
    <MainContainer>
      <TitleBox>
        <h1>Pedido feito<br></br>com sucesso!</h1>
      </TitleBox>
      <ReservationContainer>
        <InformationBox>
          <Subtitle>
            <h2>Filme e sessão</h2>
          </Subtitle>
          <Label>
            <h3>{name}</h3>
            <h3>{date} {time}</h3>
          </Label>
        </InformationBox>
        <InformationBox>
          <Subtitle>
            <h2>Ingressos</h2>
          </Subtitle>
          {seats.map ( item => (
            <Label key={item}>
              <h3>Assento {item}</h3>
            </Label>
          ))}
        </InformationBox>
        <InformationBox>
          <Subtitle>
            <h2>Comprador</h2>
          </Subtitle>
          <Label>
            <h3>Nome: {userInfo.userInfo.name}</h3>
            <h3>CPF: {userInfo.userInfo.cpf}</h3>
          </Label>
        </InformationBox>
      </ReservationContainer>
      <Button onClick={() => navigate("/")}>Voltar pra Home</Button>
    </MainContainer>
  );
}

export default Sucess;