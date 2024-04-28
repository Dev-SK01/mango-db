const mongoose  = require('mongoose')

// nested schema 
const addressSchema =  new mongoose.Schema({
    state : String,
    Pincode : Number
});

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

// schema functions
userSchema.methods.details =  function () {
    console.log(`I'm ${this.name} My Age is ${this.age}`)
};
userSchema.methods.updated =  function () {
    console.log(`Updated ${this.updatedAt} `)
};
// customized CRUD fucntions

userSchema.statics.findByName = function(name){
 if(name == null){
    return console.error('Please Enter name Arugument')
 }else{
    return this.find({name : new RegExp(name)})
 }
};
    
userSchema.virtual('fullAddress').get(function()  {
    return `${this.address.state} ${this.address.Pincode}`
});

userSchema.pre('save' , function(next){
    this.updatedAt = Date.now();
    console.log('Updated!!!')
    next()
});

userSchema.post('save' , function(){
    console.log(this.updatedAt);
});
// users is collecton this collection uses the defined  userSchema
module.exports = mongoose.model('users' , userSchema);
