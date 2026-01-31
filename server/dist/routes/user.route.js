import { Router } from "express";
import { db } from "../db/db.js";
import { users } from "../schema/schema.js";
export const userRouter = Router();
// Create user
userRouter.post("/", async (req, res) => {
    const { name, email } = req.body;
    const newUser = await db.insert(users).values({ name, email }).returning();
    res.json(newUser);
});
// Get all users
userRouter.get("/", async (_, res) => {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
});
//# sourceMappingURL=user.route.js.map