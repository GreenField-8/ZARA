import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../model/product.model";


export const createProduct = async (req: Request, res: Response) => {
    const { name, image, category, price, status } = req.body;

    const type = await getRepository(Product).insert({
        name,
        image,
        category,
        price,
        status
    })

    res.send(type);
}

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await getRepository(Product).find();

    res.send(products);
};

export const getProductById = async (req: Request, res: Response) => {
    try {
    const product = await getRepository(Product).findOne({where: {id: parseInt(req.params.id, 10)}});

    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
    } catch (error) {
    res.status(500).send('Error retrieving product');
    }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
    try {
      const products = await getRepository(Product).find({ where: { category: req.params.category} });
  
      if (products.length > 0) {
        res.send(products);
      } else {
        res.status(404).send('No products found in the specified category');
      }
    } catch (error) {
      res.status(500).send('Error retrieving products');
    }
  };
  export const getProductsByName = async (req: Request, res: Response) => {
    try {
      const products = await getRepository(Product).find({ where: { name: req.params.name } });

      if (products.length > 0) {
        res.send(products);
      } else {
        res.status(404).send('No products found with the specified name');
      }
    } catch (error) {
      console.error('Error retrieving products:', error); 
      res.status(500).send('Error retrieving products');
    }
  };
  
  export const deleteProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await getRepository(Product).delete(id);
  
      if (product.affected === 0) {
        res.status(404).send('Product not found');
      } else {
        res.send('Product deleted successfully');
      }
    } catch (error) {
      res.status(500).send('Error deleting product');
    }
  };
  
  export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, image, category, price, status } = req.body;
    
    try {
      const product = await getRepository(Product).findOne({where: {id: parseInt(req.params.id, 10)}});
  
      if (!product) {
        res.status(404).send('Product not found');
        return;
      }
  
      product.name = name;
      product.image = image;
      product.category = category;
      product.price = price;
      product.status = status;
  
      const updatedProduct = await getRepository(Product).save(product);
      res.send(updatedProduct);
    } catch (error) {
      res.status(500).send('Error updating product');
    }
  };
