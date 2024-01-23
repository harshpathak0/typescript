import  express  from "express";
import {postUserData, getUserData , updateUserData, deleteUserData } from "../Controller/userDataController";
const userRoute = express.Router();

userRoute.get("/get/userData", getUserData);
userRoute.post("/post/userData", postUserData);
userRoute.put("/update/userData/:_id", updateUserData);
userRoute.delete("/delete/userData/:_id", deleteUserData);

export default userRoute;