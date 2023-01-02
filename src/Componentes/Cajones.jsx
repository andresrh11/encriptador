import styled from "styled-components"

export default function Cajones (){
    return(<CajonTxt>
        <h1>Ningún mensaje fue encontrado</h1>
        <h3>Ingresa el texto que quieran encriptar o desencriptar</h3>
    </CajonTxt>)
}

const CajonTxt= styled.div`
position: absolute;
width: 400px;
height: 944px;
left: 1000px;
top: 40px;
background: #E9ECF8;
box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
@media (max-width: 769px) {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;

position: absolute;
width: 668px;
height: 133px;
left: 20px;
top: 850px;

/* White */

background: #FFFFFF;
/* shadow */

box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
}
@media (max-width: 376px) {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;
justify-content: center;
margin-left: 20px;
width: 250px;
height: 186px;
left: 20px;
top: 500px;
background: white;
box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
margin-bottom: 20px;

h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
}

`
