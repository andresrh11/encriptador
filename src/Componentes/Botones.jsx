import styled from "styled-components"

export default function Botones ({props, encriptador, contador, error}){
    return (<>{contador<1 && error>0 ?<ButtonStyled onClick={encriptador}  >
        {props} 
    </ButtonStyled>:<ButtonStyledis onClick={encriptador}  >
        {props} 
    </ButtonStyledis>}</>)
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
justify-content: center;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
flex-grow: 0;
@media  (max-width: 376px) {
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 24px;
gap: 8px;
width: 343px;
height: 67px;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
@media (max-width: 769px){
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 24px;
gap: 8px;
width: 332px;
height: 67px;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
flex-grow: 1;
}
`
export const ButtonStyledis = styled.button`
pointer-events: none;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 24px;
gap: 8px;

width: 328px;
height: 67px;
color: white;
justify-content: center;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
flex-grow: 0;
@media  (max-width: 376px) {
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 24px;
gap: 8px;
width: 343px;
height: 67px;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
@media (max-width: 769px){
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 24px;
gap: 8px;
width: 332px;
height: 67px;
background: #0A3871;
border-radius: 24px;
flex: none;
order: 0;
flex-grow: 1;
}
`