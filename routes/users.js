const express = require('express');
const { Pool } = require('pg');
const { cliente } = require('../pgsql');
const router = express.Router();
const postgres = require('../pgsql').cliente




router.get('/', async (req,res) => {
    postgres.connect();
    console.log("iniciando a conexão.");
    try{
    const  {rows}  = postgres.query("select * from public.usuarios;").then(result => {
            const resultado = result.rows
            console.table(resultado)
            return res.status(200).send(resultado)
        })

  
    }catch(err){
        return res.status(400).send(err)
    }

   postgres.end();
   console.log("terminando a conexão.");
});











router.post('/nuser', (req,res,next)=>{


    postgres.connect();
    cliente.query("INSERT INTO public.usuarios(nome, sobrenome, documento, email, senha, deviceToken, cidade, status, dtCreated, dtUpdated) VALUES ( "+req.body.nome+"," +req.body.sobrenome+ "," +req.body.documento+"," +req.body.email+"," +req.body.senha+"," +req.body.deviceToken+"," +req.body.cidade+","+req.body.status+"," +req.body.dtCreated+"," +req.body.dtUpdated+");"),
    postgres.end();
    
});

router.put('/eduser', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'usando o put dentro da rota usuarios'
    });
    
});

router.delete('/deluser', (req,res,next)=>{
    res.status(201).send({
        mensagem: 'usando o delete dentro da rota usuarios'
    });
    
});

module.exports = router;