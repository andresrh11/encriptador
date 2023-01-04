import styled from "styled-components"

export default function BotonDes ({props, desencrip, contador}){
    return (<>{contador>0?<ButtonStl onClick={desencrip}>
        {props}
    </ButtonStl>:
    <ButtonStldes onClick={desencrip}>
        {props}
    </ButtonStldes>}</>)
}
export const ButtonStldes = styled.button`
    pointer-events: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    justify-content: center;
    cursor: not-allowed;
    width: 328px;
    height: 67px;
    color: #0A3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
@media  (max-width:376px) {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;

    width: 343px;
    height: 67px;
    color:#0A3871;
    background: #747373;
    border-radius: 24px;

    margin-top: 15px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}
@media (max-width:769px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    color: #0A3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
`
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
    color: #0A3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
@media  (max-width:376px) {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;

    width: 343px;
    height: 67px;
    color:#0A3871;
    background: white;
    border-radius: 24px;

    margin-top: 15px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}
@media (max-width:769px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px;
    gap: 8px;
    width: 332px;
    height: 67px;
    color: #0A3871;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
`