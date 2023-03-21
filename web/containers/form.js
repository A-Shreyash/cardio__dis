const { json } = require('body-parser');
const express = require('express');
const qs = require('qs');
const axios = require('axios');

// module to handle get request on localhost:3000 and load the registration form
exports.home = (req, res) =>
{  
    res.sendFile('public/Home.html', { root: '.' })
} 
exports.form = (req, res) =>
{  
    res.sendFile('public/register.html', { root: '.' })
} 

exports.approved = (req, res) =>
{  
    res.sendFile('public/predicted.html', { root: '.' })
} 
exports.napproved = (req, res) =>
{  
    res.sendFile('public/notpredicted.html', { root: '.' })
} 



// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response
exports.formprocess = async(req, res) =>
{  
   console.log(req.body);
//    res.write('<h1> Registration Successfull :-) </h1>');
//    res.write('<p> Name : </h1>'+ req.body.name);
//    res.write('<p> Username : </h1>'+ req.body.username);
//    res.write('<p> Email : </h1>'+ req.body.mail);
//    res.write('<p> Contact : </h1>'+ req.body.mobile);
//    res.end();

const data = {
    
    // NPPM:req.body.nppm,
    // LoanStatus:req.body.ls,
    // Objective:req.body.objective,
    // Amount:req.body.amount,
    // Guarantee:req.body.guarantor,
    // Experience: req.body.experience,
    // M_Status:req.body.maritalStatus,
    // ExistingLoan:req.body.existingLoan,
    // Age:req.body.age,
    // CA_Balance:req.body.ca_balance,
    // SA_Balance:req.body.sa_balance,
    // PI_Balance:req.body.pi,
    // WorkAB:req.body.workab,
    // PhNum:req.body.phn,
    // Tenure:req.body.tenure,
    // prop:req.body.prop,
    // JobTyp:req.body.jobType,
    // HouseT:req.body.houset,
    // NOE:req.body.noe,


}
console.log(data);
 const obj = await axios.post("https://mlapi-yigp.onrender.com/predict" ,JSON.stringify(data),
 {
    headers: {
    'Content-Type': 'application/json'
    }
}
).then(res => {
    return res.data
})

console.log(obj)
if(obj === "predicted"){
    res.sendFile('public/predicted.html', { root: '.' });

}
else{
    res.sendFile('public/notpredicted.html', { root: '.' })
    ;

}

}