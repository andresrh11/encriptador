import BotonDes from "./BotonDes";
import Botones from "./Botones";
import Cajones from "./Cajones";
import InputTxt from "./InputTxt";
import styled from "styled-components";
import alura from "../../src/alura.svg";
import { useState } from "react";
import excla from "../../src/excla.png";
export default function Home() {
  let [encrip, setEncrip] = useState("");
  const arr = encrip.split("");
  let [desencript, setDesencrip] = useState("");
  const [contador, setContador] = useState(0);
  const [error, setError] = useState(0);
  const encriptador = () => {
    setDesencrip(encrip);
    setContador(1);
    console.log(contador);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "a") {
        arr[i] = "ai";
      }
      if (arr[i] === "e") {
        arr[i] = "enter";
      }
      if (arr[i] === "i") {
        arr[i] = "imes";
      }
      if (arr[i] === "o") {
        arr[i] = "ober";
      }
      if (arr[i] === "u") {
        arr[i] = "ufat";
      }
    }
    setEncrip(arr.join(""));
  };
  const desencrip = () => {
    setContador(0);
    setEncrip(desencript);
    console.log(contador);
  };

  return (
    <DivHome>
      <img src={alura} alt="" />
      <InputTxt
        setEncrip={setEncrip}
        encrip={encrip}
        setError={setError}
        arr={encrip}
      />
      <Mensaje>
        <img src={excla} alt="" />
        <h2 className={error === 1 ? "danger" : "normal"}>
          Solo letras minúsculas y sin acentos
        </h2>
      </Mensaje>
      <DivBotones>
        <Botones
          props="Encriptar"
          encriptador={encriptador}
          contador={contador}
          error={encrip}
        />
        <BotonDes
          props="Desencriptar"
          desencrip={desencrip}
          contador={contador}
        />
      </DivBotones>
      <Cajones encrip={encrip} />
    </DivHome>
  );
}
const DivHome = styled.div`
  .danger {
    color: red;
  }
  position: relative;
  width: 1440px;
  height: 1024px;
  padding-top: 8px;
  background-color: #f3f5fc;
  padding-bottom: 50px;
  img {
    padding-top: 40px;
    padding-left: 84px;
  }

  @media (max-width: 769px) {
    /* Light blue/light-blue-100 */
    width: 768px;
    height: 1174px;
    background: #f3f5fc;
    img {
      padding-top: 73.42px;
      padding-left: 40px;
    }
  }
  @media (max-width: 376px) {
    width: 375px;
    height: 933px;
    background-color: #f3f5fc;
  }
`;
const DivBotones = styled.div`
  display: flex;
  padding-left: 200px;
  width: 700px;
  justify-content: space-evenly;

  @media (max-width: 769px) {
    padding-left: 7px;
    margin-top: 4px;
    width: 768px;
    justify-content: space-evenly;
    margin-bottom: 10px;
  }
  @media (max-width: 376px) {
    padding-left: 2px;

    flex-flow: column;
    position: absolute;
    width: 345px;
    height: auto;
    justify-content: space-evenly;
    margin-bottom: 20px;

    left: 15px;
  }
`;

const Mensaje = styled.div`
  display: flex;
  margin-left: 130px;
  align-items: center;
  margin-top: 250px;
  width: 400px;
  height: 50px;
  justify-content: center;
  img {
    width: 12px;
    height: 12px;
    padding-bottom: 38px;
  }
  h2 {
    font-size: 15px;
    color: grey;
  }
  @media (max-width: 769px) {
    margin-left: 5px;
    justify-content: left;

    img {
      padding-bottom: 5px;
      margin-bottom: 65px;
    }
  }
  @media (max-width: 376px) {
    margin-left: 5px;
    justify-content: left;
    margin-top: 80px;
    img {
      padding-bottom: 5px;
      margin-bottom: 65px;
    }
  }
`;
