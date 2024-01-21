import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StoreLogo from "../../assets/store-logo.svg";
import {
  Container,
  Image,
  Content,
  Title,
  InputLabel,
  Input,
  ButtonOrder,
  Developed,
} from "./styles";

function Home() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clienteName: inputName.current.value,
    });

    setOrders([...orders, newOrder]);

    navigate("/orders");
  }

  return (
    <Container>
      <Content>
        <Image alt="background" src={StoreLogo} />
        <Title>Faça seu Pedido!</Title>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Insira seu pedido"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <ButtonOrder onClick={addNewOrder}>Novo Pedido</ButtonOrder>

        <Developed>Desenvolvido por: Luan dos Santos</Developed>
      </Content>
    </Container>
  );
}

export default Home;
