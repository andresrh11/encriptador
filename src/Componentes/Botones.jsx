import styled from "styled-components";

export default function Botones({ props, encriptador, contador, error }) {
  return (
    <>
      {contador < 1 && error !== "" ? (
        <ButtonStyled onClick={encriptador}>{props}</ButtonStyled>
      ) : (
        <ButtonStyledis>{props}</ButtonStyledis>
      )}
    </>
  );
}
export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  cursor: pointer;
  width: 328px;
  height: 67px;
  color: white;
  border: 1px solid #0a3871;
  justify-content: center;
  background: #0a3871;
  border-radius: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: 769px) {
    border: 1px solid #0a3871;
    flex-direction: row;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    background: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  @media (max-width: 376px) {
    border: 1px solid #0a3871;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 343px;
    height: 67px;
    background: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`;
export const ButtonStyledis = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  width: 328px;
  height: 67px;
  color: white;
  justify-content: center;
  background: #0a3871;
  border-radius: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 376px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 343px;
    height: 67px;
    background: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  @media (max-width: 769px) {
    border: 1px solid #0a3871;
    flex-direction: row;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    background: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
`;
