import prisma from "../prisma/prisma";
import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express'
import AppError from "../utils/AppError";
import { generateAccessToken, generateRefreshToken } from "../utils/Token";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get frontend data
        const {
            name,
            email,
            password,
            confirmPassword
        } = req.body;

        if (password !== confirmPassword) {
            throw new AppError('Password do not match', 400);
        }


        //Check empty fields

        if (!name || !email || !password || !confirmPassword) {
            throw new AppError('All fields are required', 400);
        }
        // Check existing email

        const existingUser =
            await prisma.user.findUnique({
                where: {
                    email
                }
            })

        if (existingUser) {
            throw new AppError('Email already exists', 400);
        }


        // Hash Password

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        res.status(201).json({
            message: 'Account Created Successfully',
            user
        })

    } catch (error) {

        console.log(error);

        next(error)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new AppError('All fields are required', 400);
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (!user) {
            throw new AppError('Invalid email or password', 400);
        }

        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            throw new AppError('Invalid email or password', 400);

        }


        const token = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id)

        const userInfo = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        res.status(200).json({
            message: 'Login Successful',
            token: token,
            refreshToken: refreshToken,
            user: userInfo
        })

    } catch (error) {
        console.log(error);

        next(error)

    }
}

