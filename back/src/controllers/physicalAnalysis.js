import conexion from "../database/db.js";

// INSERT INTO cacaoapp.muestras (codmuestra,idempresa,idmunicipio,idvereda,fecha_recepcion,contacto_laboratorio,
//     convenio,idequipo,idsistema,diasfermen,frecvolteos,idherramientavol,idtecnicavol,idtecnicasec,dias_secado,porcen_humedad,porcen_fermen,peso_muestra,idtecnicahum,coordenadas,epoca_cosecha,tipo_analisis,idtipoprod,idusuario,foto_muestra,observaciones,estado_muestra,analista,fecha_preplicor,fecha_catacion,fecha_desecho_granos,fecha_desecho_licor,nombre_lote,numero_lote,altura_mar,area_hectareas,cultivo,variedad,numarboles_xlote,densidad,distancia_siembra,topografia,temp_promedio,luminosidad) 
//     values("cod123",3,106,3,"2023/08/28","30152249678","convenio",1,1,5,"la frecuncia de volteos",1,1,1,3,23.5,14.5,5,1,"7.5050500","epoca",2,1,3,"https://res.cloudinary.com/dtit8udfs/image/upload/v1693233587/cacao_oagbxh.jpg","buen cacao",12,"Jorge","2023-08-28T15:30:00","2023-08-28T15:30:00","2023-08-28T15:30:00","2023-08-28T15:30:00","lote1","54555",5,10,"cultivo","variado",16,21.5,10,"buen terreno",50,16);


export const infoMuestra = async (req,res) => {
    try {
        const {cod} = req.body;
        const [sample] = await conexion.query("SELECT * FROM muestras WHERE codmuestra = ?",[cod]);
        let info = sample[0];
        if (sample.length > 0) {
            const [company] = await conexion.query("SELECT * FROM empresas WHERE idempresa = ?",[sample[0].idempresa]);
            const [mun] = await conexion.query("SELECT * FROM municipios WHERE idmunicipio = ?",[sample[0].idmunicipio]);
            const [vereda] = await conexion.query("SELECT * FROM veredas WHERE idvereda = ?",[sample[0].idvereda])
            info.nombreempresa =company[0].nombre
            info.nombremunicipio =mun[0].nombre
            info.nombrevereda=vereda[0].nombre
            res.json(sample)
        }else{
            res.json("sample not")
        }
        
        
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "ERROR 404", error });
    }
}