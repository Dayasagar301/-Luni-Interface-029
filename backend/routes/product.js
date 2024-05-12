const express = require('express');
const Product = require('../model/product');



const productRouter = express.Router();




productRouter.get('/', async(req,res)=>{
    try {
        const user = await Product.find()
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    }
});
module.exports={productRouter}


