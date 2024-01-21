import styled from "styled-components";

import Backgtound from "../../assets/background.svg";

export const Container = styled.div`
  background: url(${Backgtound});

  height: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  margin-top: 20px;
`;
export const Content = styled.div`
  background: linear-gradient(
    180deg,
    rgba(110, 179, 32, 0) 0%,
    rgba(110, 179, 32, 0.5) 0%,
    rgba(110, 179, 32, 0.25) 100%
  );
  height: 100vh;

  margin-top: 20px;

  border-radius: 61px 61px 0 0;

  padding: 0px 40px 0px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 10px 0 20px;
  text-align: center;
`;
export const InputLabel = styled.p`
  letter-spacing: -0.408;
  font-size: 18px;
  font-style: italic;
  margin-left: 15px;
  color: #ffffff;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 350px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  padding-left: 15px;
  margin: 0px 0 25px;
  color: #ffffff;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;
export const ButtonOrder = styled.button`
  width: 350px;
  height: 74px;
  border: none;
  border-radius: 15px;
  background-color: #abb320;
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.8;
  }

  margin-top: 50px;

  font-style: normal;
  line-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Developed = styled.h5`
  color: #ffffff;
  font-style: italic;
  font-weight: 200;
  position: relative;
  z-index: 999;
  margin: auto auto 10px;
  /* margin-left: auto; 
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 10px; */
`;
