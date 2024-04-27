const mongoose  = require('mongoose')

// nested schema 
const addressSchema =  new mongoose.Schema({
    state : String,
    Pincode : Number
})
// ceating the new schema for the collection
const userSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    email:{
        type:String,
        required : true,
        lowercase : true,
        validate : {
            validator : data => data.toString().includes('@') != -1 ,
            message : props => `${props.value} not a valid Email`
        }
    },
    createdAt:{
        type : Date,
        default : Date.now(),
        immutable : true , // says cannot change the data
    },
    updatedAt :{
        type : Date ,
        default : Date.now()
    },
    bestFriend : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'users'
    },
    hobbies : [String],
    address : addressSchema
});

// users is collecton this collection uses the defined  userSchema
module.exports = mongoose.model('users' , userSchema);
