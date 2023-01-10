import styled from "styled-components";
import muneco from "../muneco.png";
export default function Cajones({ encrip }) {
  function copiar() {
    document.execCommand("copy");
  }
  return (
    <CajonTxt>
      {encrip === "" ? (
        <>
          <img src={muneco} alt="" />
          <h1>Ningún mensaje fue encontrado</h1>
          <h3>Ingresa el texto que quieran encriptar o desencriptar</h3>
        </>
      ) : (
        <>
          <h3>{encrip}</h3>
          <button onClick={copiar}>Copiar</button>
        </>
      )}
    </CajonTxt>
  );
}

const CajonTxt = styled.div`
  background: #ffffff;
  width: 400px;
  height: 944px;
  left: 1000px;
  top: 40px;
  position: absolute;
  box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
  border-radius: 32px;
  padding: 15px;
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  h1 {
    text-align: center;
  }
  h3 {
    left: 5px;
    color: grey;
    word-wrap: break-word;
  }
  img {
    width: 300px;
    height: 300px;
  }
  button {
    margin-top: 800px;
    margin-left: 35px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    justify-content: center;
    cursor: pointer;
    width: 328px;
    height: 67px;
    color: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: 377px) {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px;
      gap: 8px;
      width: 279px;
      height: 67px;
      border: 1px solid #0a3871;
      border-radius: 24px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
    @media (max-width: 769px) {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px;
      gap: 8px;
      width: 624px;
      height: 67px;
      border: 1px solid #0a3871;
      border-radius: 24px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      margin-top: 20px;
    }
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 32px;
    position: none;
    width: 668px;
    height: auto;
    left: 20px;
    top: 850px;
    background: #ffffff;
    box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    h1 {
      text-align: center;
    }
    h3 {
      text-align: center;
      color: grey;
    }
    img {
      display: none;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 32px;

    position: absolute;
    width: 343px;
    height: 595px;
    left: 16px;
    top: 1096px;

    /* White */

    background: #ffffff;
    box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    h1 {
      text-align: center;
    }
    h3 {
      text-align: center;
      color: grey;
    }
    img {
      display: none;
    }
  }
`;
