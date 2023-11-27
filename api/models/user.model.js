import mongoose from 'mongoose';


//Schema is the rules and conditions for model
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },

    profilePicture:{
        type: String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
}, {timestamps: true}); //each user is gonna have extra info about the time of creation and edit

//create model
const User = mongoose.model('User', userSchema);

//export to use anywhere in app
export default User;