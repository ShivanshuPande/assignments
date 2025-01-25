const mongoose = require('mongoose');   

mongoose.connect("//databse-url")
// Define schemas
const AdminSchema = new mongoose.Schema({
    username : { type : String , required :true ,unique : true},
    password : {type : String , required : true },
 

});

const UserSchema = new mongoose.Schema({
    // Schema definition 
    username: {type : String , required :true ,unique : true},
    password : {type : String , required : true },
    purchasedcourses :{
        type :mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }   
    
})

const CourseSchema = new mongoose.Schema({
    title :{type :String , required : true},
    description : {type : String , required : true },
    price :{type : Number , required : true },
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

