const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2'); 
const app = express();

const jwtSecret = 'voteforindia';

app.use(express.json());

const connectionString = {
    host:"localhost",
    port:"3306",
    database:"election_db",
    user:"root",
    password:"manager"
}

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select id from voter where email = '${email}' and password = '${password}'`

    connection.query(queryText,(err,result)=>{
        if(!err){
            const id = result[0].id;
            const token = jwt.sign({password,id},jwtSecret);
            res.write(JSON.stringify(result));
            res.write(JSON.stringify(token))
            res.end();
            connection.end();
            
        }
        else{
            res.json(err)
            res.end();
            connection.end();
        }
    })
    
    
})

app.use((req,res,next)=>{
    const token = req.headers.authorization;

    try{
    if(token != undefined){
         const dataInsideToken = jwt.verify(token,jwtSecret);
         
         next();
    }
}
catch(e){
   res.json(e);
}
})

app.get('/candidates',(req,res)=>{
    const connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select * from candidate`;

    connection.query(queryText,(err,result)=>{
        if(!err){
            res.json(result)
        }
        else{
            res.json(err)
        }
    })
})

app.post('/vote',(req,res)=>{

    const token = req.headers.authorization;
    const dataInsideToken = jwt.verify(token,jwtSecret);
    const id = dataInsideToken.id;
    console.log(id);

    const candidate_id = req.body.candidate_id;

    const connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select id from votes where voter_id = ${id} `;

    connection.query(queryText,(err,result)=>{
        try{
           
            if(JSON.stringify(result) == '[]'){
                console.log('voter not present');
                let updatedqueryText = `insert into votes (voter_id ,candidate_id) values (${id},${candidate_id})`;

                connection.query(updatedqueryText,(err,result)=>{
                    if(!err){
                        res.json(result);
                    
                    }
                    else{
                        res.json(err);
                    }
                })
            }
            else{

                res.json("Already voted")
            }  
    }
    catch(e){
        console.log(e);
    }
    })
})

app.listen(3001,()=>{
    console.log("server started");
});