import { createPool } from 'mysql2/promise'

const conexion = createPool({
    host: "144.91.101.178",
    port: 3306,
    user: "cacaoapp",
    password: "Cacaoapp1234x",
    database: "cacaoapp"
})



export default conexion