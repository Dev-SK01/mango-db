const mongoose  = require('mongoose')

// ceating the new schema for the collection
const userSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    email:String,
    createdAt: Date,
    updatedAt : Date,
    bestFriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address : {
        state : String,
        Pincode : Number
    }
});

// users is collecton this collection uses the defined  userSchema
module.exports = mongoose.model('users' , userSchema);
