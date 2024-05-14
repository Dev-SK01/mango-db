const mongoose = require('mongoose');
const userDB = require('./userSchema')

connectDB().catch((err) => {console.log(err.message)})

async function connectDB(){
    // connectiong to the mongoDB server
    await mongoose.connect("mongodb+srv://devsk:Kavin@3713@notesedu.jrpn09e.mongodb.net/?retryWrites=true&w=majority&appName=notesedu");

    // inserting the data based on the defined schema
    const advancedQueries = await userDB.findOne({name:'Sidtharth'})
    const virtualProp = await userDB.findOne({name:'Sidtharth'})
    const customizedQueryFunction = await userDB.findByName('Sidtharth')


    console.log(advancedQueries)
    console.log(customizedQueryFunction);
    advancedQueries.details();
    console.log(virtualProp.fullAddress)

    advancedQueries.save()

}