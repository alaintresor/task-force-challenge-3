const express=require('express');
const bodyParser=require('body-parser');
const router=require('./routers/employee');


const app=express();

app.use(bodyParser.json());
//db connect
const db=require('./config/database');

//db test connection
db.authenticate()
.then(result=>console.log("db connected!!"))
.catch(err=>console.log(err));

app.get('/',(req,res)=>res.json('ok'));
app.use('/employees',router);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>console.log('server is listing on PORT '+PORT));

