import { json } from "express";
import { User } from "../models/user.model.js";

const registerUSer = async (req , res) => {
    try {
        const {username,email,password } =req.body;

        //basic validation

        if (!username || !email || !password){
            return res.status(400).json({message:"All feilds are important"})
        }
 
        // check if user already exits

        const existing = await User.findOne({email:email.toLowerCase() });

        if(existing ){
            return res.status(400).json({message:"user already exists!"});

        }

        //Create user
        const user = await User.create({
            username,
            email:email.toLowerCase(),
            password,
            loggedIn: false,

        });

        res.status(201).json({
            message:"User registerd",
            user:{
                id:user._id,
                email:user.email,
                username:user.username
            }
        });

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error:error.message
        });
    }
};

const loginUSer = async(req,res) =>{
    try {
        //checking if the user already exits
        const {email,password} = req.body;

        const user = await User.findOne({
            email:email.toLowerCase()
        });

        if(!user) return res.status(400).json({
            message:"user not found!"
        });

        //compare passwords
        const isMatch = await user.comparePassword(password);

        if(!isMatch) return res.status(400).json({
            message:"Invalid credentials"
        })

        res.status(200).json({
            message:"User loged in",
            user:{
                id:user._id,
                email:user.email,
                username:user.username
            }
        })
    } catch (error)
     {
        console.log(error);

        res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}

const logOutUser = async(req,res) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({
            email
        });

        if(!user) {
            return res.status(404).json({
                message:"User not found"
            });
        }

        res.status(200).json({
            message:"Logout successful"
        });

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error
        });
    }
}
export {
    registerUSer,
    loginUSer,
    logOutUser
};