import express, { Router } from "express";
import { AuthenticatedUser, Login, Logout, Refresh, Register } from "./controller/auth.controller";
import { createProduct, getAllProducts, getProductById, getProductsByCategory , getProductsByName } from './controller/product.controller'
// import { addToCart, showMyCart } from "./controller/cart.controller";

 const router: Router = express.Router()
    router.post('/register', Register)
    router.post('/login', Login)
    router.get('/user', AuthenticatedUser)
    router.post('/refresh', Refresh)
    router.get('/refresh', Logout)
    router.post('/addProd', createProduct)
    router.get('/prod', getAllProducts)
    router.get('/prod/:id', getProductById)
    router.get('/prodCategory/:category', getProductsByCategory)
    router.get('/prodName/:name', getProductsByName)
    router.post('/addProd', createProduct);
    // router.post('/addToCart', addToCart);
    // router.get('/showMyCart', showMyCart);
    



export default router