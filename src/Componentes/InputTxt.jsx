import styled from "styled-components";
export default function InputTxt({ setEncrip, setError, arr, error }) {
  function handleChange(e) {
    // arr.split("");
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === arr[i].toUpperCase()) {
    //     setError(+1);
    //   }
    //   var tap = error;
    //   if (error > 0) {
    //     for (let j = 0; j < arr.length; j++) {
    //       if (arr[i] === arr[i].toUpperCase()) {
    //         setError(+1);
    //       }
    //       if (error > tap) {
    //         tap = error;
    //       }
    //       if (tap === error) {
    //         setError(0);
    //       }
    //     }
    //   }
    // }

    console.log(e.target.value);
    setEncrip(e.target.value);
  }
  return (
    <InputTx>
      {" "}
      <textarea
        placeholder="ingrese el texto"
        onChange={(e) => handleChange(e)}
      />
    </InputTx>
  );
}
const InputTx = styled.div`
  display: flex;
  margin-left: 200px;

  textarea {
    margin-top: 20px;
    width: 700px;
    height: 500px;
    border: none;
    color: #0a3871;
    background: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    color: #0a3871;
  }
  @media (max-width: 376px) {
    display: flex;
    padding-left: 20px;
    textarea {
      position: absolute;
      width: auto;
      height: auto;
      left: 16px;
      top: 152px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      color: #0a3871;
      border: none;
    }
  }
  @media (max-width: 769px) {
    width: auto;
    height: 150px;
    textarea {
      width: auto;
      height: 48px;
      left: 40px;
      top: 240px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      color: #0a3871;
    }
  }
`;
