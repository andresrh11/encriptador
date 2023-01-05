import { useEffect } from "react"
import styled from "styled-components"
import muneco from "../muneco.png"
export default function Cajones ({encrip}){
    
    useEffect(()=>{
        
    },[encrip])
    return(<CajonTxt>
        {encrip == "" ?
        
        <>
        <img src={muneco} alt="" />
        <h1>Ningún mensaje fue encontrado</h1>
        <h3>Ingresa el texto que quieran encriptar o desencriptar</h3></>:<h3>{encrip}</h3>}
    </CajonTxt>)
}

const CajonTxt= styled.div`
background: #FFFFFF;
width: 400px;
height: 944px;
left: 1000px;
top: 40px;
position:absolute;
box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
img{
    width: 300px;
    height: 300px;
    
}

@media (max-width: 769px) {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;

position: absolute;
width: 668px;
height: auto;
left: 20px;
top: 850px;



background: #FFFFFF;


box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
img{
    display: none;
    
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
height: auto;
left: 10px;
top: 500px;
background: white;
box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
border-radius: 32px;
margin-bottom: 20px;
position: absolute;
z-index: 1;
h1{
    text-align: center;
}
h3{
    text-align: center;
    color: grey;
}
img{
    display: none;
    
}
}

`
