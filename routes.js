const express = require('express')
const router= express.Router()
const signUpTemplate=require('../models/SignUpModel')

router.post('/signup',(req,res)=>{


    const signedUpUser = new signUpTemplate({
        fullName:req.body.fullName,
        Mobile:req.body.Mobile,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})



module.exports = router