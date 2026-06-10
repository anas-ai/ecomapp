import prisma from "../prisma/prisma";
import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express'
import AppError from "../utils/AppError";
import { generateAccessToken, generateRefreshToken } from "../utils/Token";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get frontend data
        const {
            identifier,
            password,
            confirmPassword
        } = req.body;

        console.log("BODY =>", req.body);
        console.log("STEP 1");

        if (!identifier || !password || !confirmPassword) {
            console.log("STEP 2 - Validation Failed");

            throw new AppError('All fields are required', 400);
        }

        if (password !== confirmPassword) {
            throw new AppError('Passwords do not match', 400)
        }

        const isEmail = identifier.includes('@')
        console.log("STEP 3 - Validation Passed");

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: identifier },
                    { username: identifier }
                ]
            }
        })

        if (existingUser) {
            throw new AppError('User already exists', 400)
        }
        console.log("STEP 4 - Existing User:", existingUser);
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: isEmail ? identifier : null,
                username: !isEmail ? identifier : null,
                password: hashedPassword
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        })

        res.status(201).json({
            message: 'User registered successfully',
        })

    } catch (error) {

        console.log(error);

        next(error)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { identifier, password } = req.body;

        if (!identifier || !password) {
            throw new AppError('All fields are required', 400);
        }

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: identifier },
                    { username: identifier }
                ]
            }
        })

        if (!user) {
            throw new AppError('Invalid credentials', 400);
        }

        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            throw new AppError('Invalid credentials', 400);
        }


        const token = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id)

        const userInfo = {
            id: user.id,
            name: user.username,
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

