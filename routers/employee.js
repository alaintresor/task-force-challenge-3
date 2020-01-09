const express=require('express');
const router=express.Router();
const employee=require('../modul/employee');

//insert employee
router.post('/',(req,res)=>{
    let { employee_name,national_ID,phone,email,dob,status,position }=req.body;
    employee.create({
        employee_name,
        national_ID,
        phone,
        email,
        dob,
        status,
        position
    })
    .then(result=>res.json("Data inserted well"))
    .catch(err=>{
        res.json(err);
        console.log(err)
})
})

//delete employee
router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    employee.findOne({where:{id}})
    .then(result=>
        {
            if(result)
            {
                employee.destroy({where:{id}})
                .then(v=>res.json("employee record deleted well"))
                .catch(err=>console.log(err));
            }
            else
            {
                res.json("no employee with id "+id+" found!");
            }
        })
    .catch(err=>console.log(err));
})

//update employee
router.put('/:id',(req,res)=>{
    const id=req.params.id;
    let { employee_name,national_ID,phone,email,dob,position }=req.body;
    employee.findOne({where:{id}})
    .then(result=>
        {
            if(result)
            {
                employee.update({
                    employee_name,
                    national_ID,
                    phone,
                    email,
                    dob,
                    position
                },
                {where:{id}})
                .then(v=>res.json("employee record updated well"))
                .catch(err=>console.log(err));
            }
            else
            {
                res.json("no employee with id "+id+" found!");
            }
        })
    .catch(err=>console.log(err));
})

//search employee
router.post('/search',(req,res)=>{
    const iterm=req.body.search;
    let results=[];
    //search by position
    employee.findAll({where:{position:iterm}})
    .then(result=>{
        if(result)
        {
            results.push(result);
        }
    })
    //search by name
    employee.findAll({where:{employee_name:iterm}})
    .then(result=>{
        if(result)
        {
            results.push(result);
        }
})
//search by phone number
employee.findAll({where:{phone:iterm}})
    .then(result=>{
        if(result)
        {
            results.push(result);
        }
})
//search by email
employee.findAll({where:{email:iterm}})
.then(result=>{
    if(result)
    {
        results.push(result);
    }
    if(results.length>0)
{
    res.json(results)
}
else
{
    res.json("No data found!")
}
})

})

//active employee
router.put('/:id/active',(req,res)=>{
    const id=req.params.id;
    employee.findOne({where:{id}})
    .then(result=>{
        if(result)
        {
            employee.update({status:'active'},{where:{id}})
            res.json("data updated well done")
        }
        else
        {
            res.json("No employee with id "+id+" founded!")
        }
    })
})

//suspend employee
router.put('/:id/suspend',(req,res)=>{
    const id=req.params.id;
    employee.findOne({where:{id}})
    .then(result=>{
        if(result)
        {
            employee.update({status:'inactive'},{where:{id}})
            res.json("data updated well done")
        }
        else
        {
            res.json("No employee with id "+id+" founded!")
        }
    })
})


module.exports=router;
