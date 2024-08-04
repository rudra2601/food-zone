import express from 'express';
import { loginUser,registerUser,getUsers,deleteUser } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/users", getUsers);
userRouter.delete('/users/:userId', deleteUser);
//userRoter.post('/forgot-password', forgotPassword);
//userRoter.post('/reset-password', resetPassword);

export default userRouter;