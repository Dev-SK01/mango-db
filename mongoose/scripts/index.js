const mongoose = require('mongoose');
const userDB = require('./userSchema')

connectDB().catch((err) => {console.log(err.message)})

async function connectDB(){
    // connectiong to the mongoDB server
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");

    // inserting the data based on the defined schema
    const advancedQueries = await userDB
    .where('name')
    .equals('Sanjai Krishna')
    .gt(10)
    .select('name')
    .populate('bestFriend'); 
    console.log(advancedQueries)
}