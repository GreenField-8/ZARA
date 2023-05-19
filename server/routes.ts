import express, { Router } from "express";
import { AuthenticatedUser, Login, Logout, Refresh, Register } from "./controller/auth.controller";

 const router: Router = express.Router()
    router.post('/register', Register)
    router.post('/login', Login)
    router.get('/user', AuthenticatedUser)
    router.post('/refresh', Refresh)
    router.get('/refresh', Logout)


export default router