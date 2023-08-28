import { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import { Code } from "./components/Code";
import { Info } from "./components/Info";
import { FormAnalysis } from './components/FormAnalysis';
import './App.css'

function App() {
  const [active, setActive] = useState(1)
  const [infoMuestra,setInfoMuestra] = useState()
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={()=>setActive(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const recibirDatos = (datos) => {

    if (datos.infoMuestra) {
      if (datos.infoMuestra == "sample not") {
        alert("Ingrese el código")
      }else{
        setInfoMuestra(datos.infoMuestra);
      }
      
    }
    
  };

  return (
    <>
      <h1 style={{color:"#5D1F06",textDecoration:"underline",marginLeft:"2.5vw",marginBottom:"3.5vh"}}>Analisis físico</h1>
      <div className='box'>
        <>
          <div style={{width:"60%",height:"90vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",}}> 
            {active == 1 ? <h2 style={{color:"#5D1F06",marginLeft:"2%",marginTop:"3.5vh",}}>Información análisis físico</h2> : null}
            {active == 2 ? <h2 style={{color:"#5D1F06",marginLeft:"2%",marginTop:"3.5vh",}}>Repetición 1 análisis físico</h2> : null}
            {active == 3 ? <h2 style={{color:"#5D1F06",marginLeft:"2%",marginTop:"3.5vh",}}>Repetición 2 análisis físico</h2> : null}
            {active == 4 ? <h2 style={{color:"#5D1F06",marginLeft:"2%",marginTop:"3.5vh",}}>Repetición 3 análisis físico</h2> : null}
            {active == 1 ? 
            <Code devolucion={recibirDatos} /> 
            : null}
            {active == 2 ? 
            <FormAnalysis devolucion={recibirDatos} /> 
            : null}
            <Pagination className="custom-pagination">{items}</Pagination>
            <Button style={{backgroundColor:"#5D1F06", border:"solid 1px #5D1F06",marginBottom:"2%",padding:"7px 17px"}} onClick={() => setActive(active < 5 ? active+1 : 5)}>SIGUIENTE</Button>
          </div>
          <Info info={infoMuestra}/> 
        </>
      </div>
    </>
  )
}

export default App
