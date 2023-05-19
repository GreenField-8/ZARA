// import { Request, Response } from "express";
// import { getRepository } from "typeorm";
// import { User } from "../model/user.model";
// import { Product } from "../model/product.model";
// import { Cart } from "../model/cart.model";

// export const addToCart = async (req: Request, res: Response) => {
//     const { userId, productId } = req.body;
  
//     // Get the repositories
//     const userRepository = getRepository(User);
//     const productRepository = getRepository(Product);
//     const cartRepository = getRepository(Cart);
  
//     try {
//       // Retrieve the user from the database
//       const user = await userRepository.findOne(userId);
  
//       // Check if the user exists
//       if (!user) {
//         return res.status(404).send("User not found");
//       }
  
//       // Retrieve the product from the database
//       const product = await productRepository.findOne(productId);
  
//       // Check if the product exists
//       if (!product) {
//         return res.status(404).send("Product not found");
//       }
  
//       // Retrieve the cart from the user object
//       const cart = user.cart;
  
//       cart.products.push(product);
//       await cartRepository.save(cart);
//       res.send("Product added to cart successfully");
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//       res.status(500).send("An error occurred while adding the product to the cart");
//     }
//   };

// export const showMyCart = async (req: Request, res: Response) => {

//   try {
//     const userRepository = getRepository(User);
//     const user = await userRepository.findOne({
//         where: { id: userId },
//         relations: ["cart", "cart.products"]
//       });
      
//     if (!user || !user.cart) {
//       return res.status(404).send("User or cart not found");
//     }

//     const cartProducts = user.cart.products;

//     res.send(cartProducts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while retrieving the cart");
//   }
// };
