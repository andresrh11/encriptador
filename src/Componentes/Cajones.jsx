import styled from "styled-components";
import muneco from "../muneco.png";
import CopyToClipboard from "react-copy-to-clipboard";
export default function Cajones({ encrip }) {
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
          <p className="encrip">{encrip}</p>
          <CopyToClipboard text={encrip}>
            <button>Copiar</button>
          </CopyToClipboard>
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

  overflow: hidden;
  h1 {
    text-align: center;
  }
  p {
    width: auto;
    height: auto;
    left: 5px;
    color: grey;
    text-align: center;
  }
  h3 {
    color: grey;
    text-align: center;
  }
  .encrip {
    white-space: initial;
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
    @media (max-width: 376px) {
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
      color: grey;
      text-align: center;
    }
    p {
      position: relative;
      width: 660px;
      height: auto;
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
    width: 280px;
    height: auto;
    left: 16px;
    top: 640px;
    background: #ffffff;
    box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
    border-radius: 32px;

    h1 {
      text-align: center;
    }
    h3 {
      color: grey;
      text-align: center;
    }
    p {
      color: grey;

      width: auto;
      height: auto;
    }
    .encrip {
      white-space: initial;
    }
    img {
      display: none;
    }
  }
`;
