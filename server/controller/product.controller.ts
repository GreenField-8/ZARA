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

export const getProductByCategory = async (req: Request, res: Response) => {
    try {
        const product = await getRepository(Product).findOne({where: {category:req.body.category}});
    
        if (product) {
            res.send(product);
        } else {
            res.status(404).send('Product not found');
        }
        } catch (error) {
        res.status(500).send('Error retrieving product');
        }
};

export const getProductByName = async (req: Request, res: Response) => {
    try {
      const product = await getRepository(Product).findOne({ where: { name: req.body.name } });
  
      if (product) {
        res.send(product);
      } else {
        res.status(404).send('Product not found');
      }
    } catch (error) {
      res.status(500).send('Error retrieving product');
    }
  };
  

