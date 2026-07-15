import { db } from "../config/db.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword } from "../utils/hashPassword.js"
import { findUserByEmail, findUserById, insertUSer } from "../models/userModels.js";



export const register = (req, res) => {

    try {

        const { name, email, password, role } = req.body;


        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        findUserByEmail(email, async (err, result) => {
            if (err) return res.status(500).send(err.message)

            if (result.length > 0) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }

            // Hash password
            const hashedPassword = await hashPassword(password);

            const userData = {
                name,
                email,
                password: hashedPassword,
                role
            };


            insertUSer(userData, (err, result) => {
                if (err) return res.status(500).send(err.message)
                res.status(201).send({
                    message: "User Register",
                    userId: result.userId
                })
            })

        })



    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


export const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status('400').json({
            message : "email and password required"
        })
    }

    findUserByEmail(email, async(err, result) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result[0];

        //password check 

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // jwt sing token
        const token = generateToken(user)

        res.status(200).json({
            message: "Login successful",
            token
        })

    })

}

export const getProfile = (req, res) => {
    const userId = req.user.id;

    findUserById(userId, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).send("User not found");
        }

        res.status(200).json(result[0]);
    })

  
}