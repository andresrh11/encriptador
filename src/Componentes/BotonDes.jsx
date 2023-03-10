import styled from "styled-components";

export default function BotonDes({ props, desencrip, contador }) {
  return (
    <>
      {contador > 0 ? (
        <ButtonStl onClick={desencrip}>{props}</ButtonStl>
      ) : (
        <ButtonStldes>{props}</ButtonStldes>
      )}
    </>
  );
}
export const ButtonStldes = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  justify-content: center;

  width: 328px;
  height: 67px;
  color: #0a3871;
  border-radius: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 1px solid #0a3871;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    color: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
    border: 1px solid #0a3871;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;

    width: 343px;
    height: 67px;
    color: #0a3871;
    background: white;
    border-radius: 24px;
    border: 1px solid #0a3871;
    margin-top: 15px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`;
export const ButtonStl = styled.button`
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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    color: #0a3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;

    width: 343px;
    height: 67px;
    color: #0a3871;
    background: white;
    border-radius: 24px;

    margin-top: 15px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`;
