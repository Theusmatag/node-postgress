
const Client = require('pg').Client
const cliente = new Client({user: "postgres",
 password:"1234",
host:"127.0.0.1",
port: 5432,
database: "delivery"})

// cliente.connect()
// cliente.query("select * from public.usuarios;").then(result => {
//     const resultado = result.rows
//     console.table(resultado)
// })
// .finally(()=> cliente.end());


exports.cliente=cliente;