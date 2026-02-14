import jwt from 'jsonwebtoken';
import { User } from "../schema/user.schema.js";
export const protechUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(404).json({ error: "Authorization denied" });
    }
    try {
        const isUserExist = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(isUserExist?.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        req.user = user;
        req.userId = user._id;
        next();
    }
    catch (error) {
        console.log(`Error in user middleware: ${error}`);
        res.status(503).json({ error: `Error in user middleware: ${error}` });
    }
};
//# sourceMappingURL=user.middleware.js.map