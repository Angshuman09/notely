import bcrypt from "bcryptjs";
import { User } from "../schema/user.schema.js";
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ error: "email and password is not send" });
        }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            return res.status(401).json({ error: "Invalid email" });
        }
        if (password.length < 6) {
            return res.status(401).json({ error: "password length must be greater than 6 characters" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            email,
            password: hashedPassword
        });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d',
        });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: false
        });
        res.status(200).json({ user: {
                email: user.email
            } });
    }
    catch (error) {
        console.log("Error in user registration: ", error);
        res.status(500).json({
            error: `Error in user registration ${error}`
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).json({ error: "email and password must required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ error: "user not found." });
        }
        const verifyPassword = bcrypt.compare(password, user?.password);
        if (!verifyPassword) {
            res.status(401).json({ error: "password not valid." });
        }
        const token = jwt.sign({ userId: user?._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d'
        });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: false
        });
        res.status(200).json({ user: user?.email });
    }
    catch (error) {
        console.log("Error in user login: ", error);
        res.status(500).json({
            error: `Error in user login ${error}`
        });
    }
};
export const logout = async (_, res) => {
    res.clearCookie("token");
};
//# sourceMappingURL=users.controller.js.map