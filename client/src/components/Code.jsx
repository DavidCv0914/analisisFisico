import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { infoMuestra } from "../api/api";
import "boxicons";

export const Code = (props) => {

    const [cod,setCod] = useState("")
    

    const search= async() =>{
      const resp = await infoMuestra({cod:cod})
      if (resp.data == "sample not") {
        props.devolucion({infoMuestra:"sample not"});
      }else{
        props.devolucion({infoMuestra:resp.data});
      }
      
    }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "3%",
      }}
    >
      <h5 style={{color:"#5D1F06"}}>Código de la muestra</h5>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(e) => setCod(e.target.value)}
          placeholder="Escriba el código"
          type="text"
          style={{
            width: "90%",
            outlineColor: "#5D1F06",
            boxShadow: "0 0 5px #5D1F06",
            border: "solid 1px #5D1F06",
          }}
        />
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#5D1F06",
            border: "solid 2px #5D1F06",
          }}
          id="button-addon2"
          onClick={() => search()}
        >
          <box-icon name="search" color="rgb(255 255 255)"></box-icon>
        </Button>
      </InputGroup>
    </div>
  );
};
