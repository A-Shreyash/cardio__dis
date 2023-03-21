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

exports.predicted = (req, res) =>
{  
    res.sendFile('public/predicted.html', { root: '.' })
} 
exports.notpredicted = (req, res) =>
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
    
    age:req.body.age,
    sex:req.body.sex,
    cp:req.body.cp,
    trestbps:req.body.trestbps,
    chol:req.body.chol,
    fbs: req.body.fbs,
    restecg:req.body.restecg,
    thalach:req.body.thalach,
    exang:req.body.exang,
    oldpeak:req.body.oldpeak,
    slope:req.body.slope,
    ca:req.body.ca,
    thal:req.body.thal,
}
console.log(data);
 const obj = await axios.post("https://card-d.onrender.com/target" ,JSON.stringify(data),
 {
    headers: {
    'Content-Type': 'application/json'
    }
}
).then(res => {
    return res.data
})

console.log(obj)
if(obj === "detected"){
    res.sendFile('public/predicted.html', { root: '.' });

}
else{
    res.sendFile('public/notpredicted.html', { root: '.' })
    ;

}

}