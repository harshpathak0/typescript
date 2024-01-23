import userModel, { User } from "../Model/userModel";
import { Request, Response } from "express";

////////////Api to post the data//////////////
export const postUserData = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: User = req.body;
        const user: User = await userModel.create(userData);
        res.json(user);
    }
    catch (error) {
        console.log("Internal error:", error);
        res.status(500).json({ error: "Internal Server Error..." });
    }
};


//////////Api to get the data//////////////
export const getUserData = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await userModel.find();
        res.json(users);
    }
    catch (error) {
        console.log("Internal error:", error);
        res.status(500).json({ error: "Internal Server Error..." })
    }
};


//////////Api to update the data///////////////
export const updateUserData = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params._id; 
        const userData: User = req.body;
        const updatedUser: User | null = await userModel.findByIdAndUpdate(userId, userData, { new: true });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        console.log("Internal error:", error);
        res.status(500).json({ error: "Internal Server Error..." });
    }
};


//////////Api to delete the data///////////////
export const deleteUserData = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params._id;
        const deletedUser: User | null = await userModel.findByIdAndDelete(userId);
        if (deletedUser) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        console.log("Internal error:", error);
        res.status(500).json({ error: "Internal Server Error..." })
    }
};
