import BotonDes from "./BotonDes"
import Botones from "./Botones"
import Cajones from "./Cajones"
import InputTxt from "./InputTxt"
import styled from "styled-components"
import alura from "../../src/alura.svg"
import { useState } from "react"


export default function Home (){
    let [encrip, setEncrip]=useState("");
    const arr = encrip.split("")
    let [desencript, setDesencrip]=useState("")
     const [contador,setContador] = useState(0)
     
    const encriptador = () => {
      setDesencrip(encrip) ;  
        setContador(1)
       console.log(contador)

        for (let i = 0; i < arr.length; i++) {
            if(arr[i]==="a"){
                arr[i]="ai"
            }
            if(arr[i]==="e"){
                arr[i]="enter"
            }
            if(arr[i]==="i"){
                arr[i]="imes"
            }
            if(arr[i]==="o"){
                arr[i]="ober"
            }
            if(arr[i]==="u"){
                arr[i]="ufat"
            }             
    } 
    setEncrip(arr.join(""))
    
    }
    const desencrip =()=>{
        setContador(0)
        setEncrip(desencript)
        console.log(contador)
    }
    
     
    
    return(
        <DivHome>
        <img src={alura} alt="" />
        <InputTxt setEncrip={setEncrip} encrip={encrip}  />
        <DivBotones>
        <Botones props="Encriptar" encriptador={encriptador} contador={contador} />
        <BotonDes props="Desencriptar" desencrip={desencrip} contador={contador} /></DivBotones>
        <Cajones encrip={encrip} />
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