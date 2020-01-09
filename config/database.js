const sequelize=require('sequelize');
const db = new sequelize('employee_management', 'root', null, {
       dialect: 'mysql'
     })
module.exports=db;
