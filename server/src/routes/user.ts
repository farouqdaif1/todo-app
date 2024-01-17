import express from "express";
import * as UserController from "../Controllers/UserAuth";
// import { requiresAuth } from "../middleware/auth";

const router = express.Router();


router.post("/signup", UserController.signUp);

router.post("/login", UserController.signIn);


export default router;