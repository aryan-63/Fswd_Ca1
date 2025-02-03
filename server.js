const express = require('express');
const app= express();
const port=3000;
app.use(express.json());
app.get('/', (req,res)=> {
    res.send("");
});

app.listen(port,()=>{
    console.log('Server is running at http://localhost:${port}');
});

app.post('/Signup',(req,res)=>{
    const{userName, email,password, dateOfBrirth}= req.body;


    if(!userName){

        return res.status(400).json({error:"Username cannot be empty"});

    }

    if(!email){
       
        return res.status(400).json({error:"Email cannot be empty"});

    }



    if(!password){

        return res.status(400).json({error:"Password cannot be empty"});

    }

    if(password.length>8 && password.length<17){

        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }



    if(!dateOfBrirth){

        return res.status(400).json({error:"Date Of Birth cannot be empty"});

    }

    
    res.status(201).json({
        message:"User signed up successfully",
        user:{
            userName,
            email,
            password,
        }
    });

});





