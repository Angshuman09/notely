import type { Request,Response,NextFunction } from "express";

export const protechUser = async (req:Request, res: Response, next: NextFunction)=>{
    try {
        
        
    } catch (error) {
        console.log(`Error in user middleware: ${error}`);
        res.status(503).json({error: `Error in user middleware: ${error}`});
    }
}