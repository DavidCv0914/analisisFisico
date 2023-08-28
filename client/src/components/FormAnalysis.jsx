import Form from "react-bootstrap/Form";

export const FormAnalysis = () => {

    const handleChange = (e) => {

    }

  return ( 
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "3%",
        overflowY: "scroll", height: "700px"
      }}
    >
      <Form style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridAutoRows:"minmax(auto, max-content)",gap:"10px"}}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Fecha
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="fecha"
            type="date"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Temperatura
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="temperatura"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Tiempo
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="tiempo"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Muestra
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="muestra"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Masa inicial
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="masaInicial"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>    

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Humedad
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="humedad"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>    

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Masa final
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="masaFinal"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos fermentados
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="fermentados"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos violetas
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="violetas"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos pizarrosos
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="pizarrosos"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos mohosos
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="mohosos"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos germinados
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="germinados"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos con insectos
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="insectos"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Granos aglomerados
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="aglomerados"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#5D1F06", fontWeight: "600" }}>
            Indice del grano
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            style={{
              outlineColor: "#5D1F06",
              boxShadow: "0 0 5px #5D1F06",
              border: "solid 1px #5D1F06",
            }}
            name="indice"
            type="text"
            placeholder="Escriba..."
          />
        </Form.Group>
      </Form>
    </div>
  );
};
