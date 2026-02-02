import { db } from "../db/db.js";
import { users } from "../schema/schema.js";
import type {Request, Response, NextFunction} from 'express'
import { getAuth } from "@clerk/express";
import { eq } from "drizzle-orm";

export const syncUser = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {userId: clerkUserId} = getAuth(req);
    
        if(!clerkUserId){
            return res.status(401).json({message: "Unauthorized"})
        }
    
        const existingUsers = await db.select().from(users).where(eq(users.clerkUserId, clerkUserId));

        let user = existingUsers[0];

        if(!user){
            const [insertedUser] = await db.insert(users).values({clerkUserId}).returning();
            user = insertedUser
        }

        req.syncuser = user!;
        next();
    } catch (error) {
        console.log("Error in sync the user.");
        res.status(500).json({message: "Error in syncing the user"});
    }
}