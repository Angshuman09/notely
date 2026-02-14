import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../schema/user.schema.js";
import jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response)=>{
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(401).json({error:"username and password is not send"});
        }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
        if(regex.test(username)){
            return res.status(401).json({error:"Invalid username"});
        }
        if(password.length<6){
            return res.status(401).json({error:"password length must be greater than 6 characters"});
        }

        const isUserExist = await User.findOne({username});

        if(isUserExist){
            const verifyPassword = await bcrypt.compare(password,  isUserExist.password);
            if(!verifyPassword) return res.status(404).json({error: "Unauthorized access"});
            const userId = isUserExist?.id as string;
            const token = jwt.sign({userId},process.env.JWT_SECRET_KEY as string,{
                expiresIn: '7d'
            })
    
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 7*24*60*60*1000,
                secure: true,
                sameSite: "none"
            })
    
            return res.status(200).json({user: isUserExist?.username})
        }

        const salt = await  bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            password: hashedPassword
        })

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d',
        })

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000,
            secure: true,
            sameSite: false
        })

        res.status(200).json({user:{
            username:user.username
        }});
    } catch (error) {
        console.log("Error in user registration: ", error);
        res.status(500).json({
            error:`Error in user registration ${error}`
        })
    }
}


export const logout = async (_:any, res:Response)=>{
    res.clearCookie("token");
}

export const getUser = async (req: Request, res: Response)=>{
    try {
        const userId = req.userId;

        if(!userId){
            return res.status(401).json({error: "Unauthorized"});
        }

        const user = User.findById(userId);

        if(!user){
            return res.status(404).json({error: "user not found"});
        }

        return res.status(200).json({user});
    } catch (error) {
        console.log("Error in fetching user data: ", error);
        res.status(500).json({
            error:`Error in fetching user ${error}`
        })
    }
}