import express, { Router } from "express";
import { AuthenticatedUser, Login, Logout, Refresh, Register } from "./controller/auth.controller";
import { createProduct, getAllProducts, getProductById, getProductByCategory } from './controller/product.controller'


 const router: Router = express.Router()
    router.post('/register', Register)
    router.post('/login', Login)
    router.get('/user', AuthenticatedUser)
    router.post('/refresh', Refresh)
    router.get('/refresh', Logout)
    router.post('/addProd', createProduct)
    router.get('/prod', getAllProducts)
    router.get('/prod/:id', getProductById)
    router.get('/prod/:category', getProductByCategory)


export default router