import BotonDes from "./BotonDes"
import Botones from "./Botones"
import Cajones from "./Cajones"
import InputTxt from "./InputTxt"
import styled from "styled-components"
import alura from "../../src/alura.svg"
import { useState } from "react"
export default function Home (){
    const [encrip,setEncrip]=useState("");
    
    encrip.split("")
    console.log(encrip)
    for (let i = 0; i < encrip.length; i++) {
       
        
    }
    return(
        <DivHome>
        <img src={alura} alt="" />
        <InputTxt props={setEncrip} />
        <DivBotones>
        <Botones props="Encriptar"/>
        <BotonDes props="Desencriptar"/></DivBotones>
        <Cajones />
        </DivHome>
    )
}

const DivBotones = styled.div`
display: flex;
padding-left:200px;
margin-top: 40px;
width: 700px;
justify-content: space-evenly;

@media  (max-width: 376px) {
    display: flex;
    padding-left:2px;
    margin-top: 4px;
    flex-flow: column;
    width: 250px;
    justify-content: space-evenly;
    margin-bottom: 40px; 
}
@media  (max-width: 769px) {
   
display: flex;
padding-left:7px;
margin-top: 4px;
margin-left: 20px;
width: 700px;
justify-content: space-between;
margin-bottom: 40px; 
}
`
const DivHome = styled.div`
padding-top:8px;
padding-left:8px;
width: screen;
height: auto;
background: #E9ECF8;
padding-bottom: 50px;
img{
    padding-top:40px;
    padding-left: 84px;
}
@media  (max-width: 376px) {
    
    width: auto;
    height: auto;
    background: #E9ECF8;
    padding-bottom: 20px;
}
@media  (max-width: 769px) {
    
    position: relative;
    width: auto;
    height: auto;

/* Light blue/light-blue-100 */

background: #F3F5FC;
    img{
        padding-top: 73.42px;
        padding-left: 40px;
    }
}
`