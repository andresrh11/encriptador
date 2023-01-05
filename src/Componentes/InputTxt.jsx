import styled from "styled-components"

export default function InputTxt({setEncrip, encrip}){
    function handleChange(e){
        console.log(e.target.value)
        setEncrip(e.target.value)
    }
    return<InputTx> <input placeholder="ingrese el texto" onChange={(e)=>handleChange(e)} /></InputTx>
}
const InputTx = styled.div`
display: flex;
margin-left:200px;

input{
    
    width: auto;
    height:auto; 
    border:none;
    color: #0A3871;
    background: none;
}
@media  (max-width: 376px) {
    display: flex;
    padding-left: 20px;
    input{        
        position: absolute;
        width: auto;
        height: auto;
        left: 16px;
        top: 152px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;       
        color: #0A3871;
        border: none;
}  
}
@media  (max-width: 769px) {
    width: auto;
    height: 150px;
    input{      
        width: auto;
        height: 48px;
        left: 40px;
        top: 240px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 150%;
        color: #0A3871;
    
}  
}
`
