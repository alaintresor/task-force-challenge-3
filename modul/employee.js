const sequelize=require('sequelize');
const db=require('../config/database');

const employee=db.define('employee',{
    employee_name:{
        type:sequelize.STRING
    },
    national_ID:{
        type:sequelize.STRING
    },
    phone:{
        type:sequelize.STRING
    },
    email:{
        type:sequelize.STRING
    },
    dob:{
        type:sequelize.STRING
    },
    status:{
        type:sequelize.STRING
    },
    position:{
        type:sequelize.STRING
    }
    
})

module.exports=employee;