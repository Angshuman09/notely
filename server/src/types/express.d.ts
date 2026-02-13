import { AuthObject } from "@clerk/express";
import { Types } from "mongoose";
import { User } from "../schema/user.schema.ts";
declare global {
  namespace Express {
    interface Request {
      auth?: AuthObject;
      syncuser?: {
        id: string;
        clerkUserId: string;
        createdAt: Date;
      };
      userId?: Types.ObjectId | undefined;
      user?: User | undefined;
    }
  }
}
