export const Info = (props) =>{

    return(
        <div style={{width:"40%",borderLeft:"solid 2px #c9d3dd",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",textAlign:"center"}}>
            
            {props.info ? 
                <>
                    <h2 style={{color:"#5D1F06"}}>Información de la muestra</h2>
                    <img src={props.info[0].foto_muestra} alt="muestra" style={{height:"200px",width:"300px"}} />
                    <h5>Empresa de la muestra: {props.info[0].nombreempresa}</h5>
                    <h5>Municipio de origen: {props.info[0].nombremunicipio}</h5>
                    <h5>Vereda de origen: {props.info[0].nombrevereda}</h5>
                </>
            : null}
        </div>
    )
}