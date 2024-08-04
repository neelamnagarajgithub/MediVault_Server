import { createuser, deleteuser, getallUsers, getUserByEmail, getuserbyid, updateuser } from "../controllers/user-controller.js";
import express from 'express';

const userRouter=express.Router();

userRouter.route('/user')
.get(getallUsers)
.post(createuser);

userRouter.route('/user/:email')
.get(getUserByEmail)

userRouter.route('/user/:id')
.get(getuserbyid)
.patch(updateuser)
.delete(deleteuser)



export default userRouter;