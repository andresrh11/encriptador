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
     const [error,setError]=useState(0)
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
        <InputTxt setEncrip={setEncrip} encrip={encrip} setError={setError} arr={encrip} />
         <h2 className={error===1?"danger":"normal"}>No debe contener mayusculas</h2>
        <DivBotones>
        <Botones props="Encriptar" encriptador={encriptador} contador={contador} error={error} />
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
    padding-top: 20px;
    flex-flow: column;
    width: 319px;
    justify-content: space-evenly;
    margin-bottom: 40px; 
}
@media  (max-width: 769px) {
   
display: flex;
padding-left:7px;
margin-top: 4px;

width: auto;
justify-content: space-between;
margin-bottom: 40px; 
}
`
const DivHome = styled.div`
.danger{
    color:red
}
padding-top:8px;

width: auto;
height: screen;
background: #E9ECF8;
padding-bottom: 50px;
img{
    padding-top:40px;
    padding-left: 84px;
}
@media  (max-width: 376px) {
    display:block;
   height: auto;
    background-color: #E9ECF8;
    
}
@media  (max-width: 769px) {
    
    
    

/* Light blue/light-blue-100 */

background: #F3F5FC;
    img{
        padding-top: 73.42px;
        padding-left: 40px;
    }
}
`