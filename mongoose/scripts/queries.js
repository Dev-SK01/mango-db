const mongoose = require('mongoose');
const userDB = require('./userSchema')

connectDB().catch((err) => {console.log(err.message)})

async function connectDB(){
    // connectiong to the mongoDB server
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");

    // Mongoose Queries
    const findId = await userDB.findById('662c952005267bf6831f8730'); 
    const findProp = await userDB.find({name: 'devsk'}); 
    const update = await userDB.updateOne({name: 'devsk'} ); 
    const Delete = await userDB.deleteOne({name: 'Sidtharth'});
    const advancedQueries = await userDB
    .where('name')
    .equals('Sanjai Krishna')
    .gt(10)
    .select('name')
    .populate('bestFriend'); 

    console.log(advancedQueries)
    console.log(findId);
    console.log(findProp);
    console.log(update);
    console.log(Delete);

}