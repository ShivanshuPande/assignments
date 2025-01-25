const mongoose = require('mongoose');   

mongoose.connect("mongodb+srv://Shiv_2005:Shivanshu192005@cluster0.aw2rp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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

