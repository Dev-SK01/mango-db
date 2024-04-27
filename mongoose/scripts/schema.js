const mongoose = require('mongoose');
const userDB = require('./userSchema')

// catch the error if occur
connectDB().catch((err) => {console.log(err.message)})

async function connectDB(){
    // connectiong to the mongoDB server
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
    // inserting the data based on the defined schema
    const user = await userDB.create({
        name:'Sidtharth', 
        age:20, 
        email:'sid@gmail.com',
        hobbies : ['listning'],
        address:{
            state: 'Tamilnadu',
            Pincode : 630551
        }
    }); 
    console.log(user);
}