import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoPack from "../../assets/logo-pack.svg";
import Trash from "../../assets/trash.svg";
import {
  Container,
  Image,
  Content,
  Title,
  ButtonOrder,
  Developed,
  Order,
  ContentOrder,
  ContentName,
} from "./styles";

function Home() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order");

      setOrders(newOrder);
    }
    fetchOrder();
  }, []);

  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    setOrders(orders.filter((order) => order.id !== orderId));
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Content>
        <Image alt="background" src={LogoPack} />
        <Title>Pedido!</Title>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <ContentOrder>
                <p>{order.order}</p>
                <ContentName>
                  <p>{order.clienteName}</p>
                </ContentName>
              </ContentOrder>
              <button onClick={() => deleteUser(order.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </Order>
          ))}
        </ul>
        <ButtonOrder onClick={goBackPage}>Voltar</ButtonOrder>

        <Developed>Desenvolvido por: Luan dos Santos</Developed>
      </Content>
    </Container>
  );
}

export default Home;
