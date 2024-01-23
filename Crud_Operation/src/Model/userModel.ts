import mongoose, {Document, Schema} from "mongoose"

export interface User extends Document{
    userName:string,
    email:string,
    mobile:number,
    password:string
}

const userSchema: Schema<User> = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userData = mongoose.model<User>("userData", userSchema);

export default userData;