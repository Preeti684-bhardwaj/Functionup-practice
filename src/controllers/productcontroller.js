const productModel=require('../models/product.js');

const createProduct= async function (req, res) {
    let product = req.body
    let productCreated = await productModel.create(product)
    res.send({data: productCreated})
};

module.exports.createProduct=createProduct