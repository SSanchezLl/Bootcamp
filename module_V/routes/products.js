var express = require('express');
var router = express.Router();
var productService = require('../services/products');
//var verifyToken = require("../middlewares/authMiddleware");

/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getAllProducts = function (req, res, next) {
  productService.getAllProducts()
   .then(products => res.json(products))
   .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive request HTTP POST through middleware from Node.JS and expressJS and
 * response object Request. Use method or verb POST
 * @param req
 * @param res
 * @param next
 */
var createProduct = function (req, res, next) {
  productService.createProduct(req.body)
  .then((product) => res.status(201).send(product))
  .catch(err => res.status(409).json(err));
};

/**
 * @method
 * @description This method use with receive an productname request HTTP GET through middleware from Node.JS and expressJS
 * and response object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getProductByProductName = function (req, res, next) {
  productService.getProductByProductName(req.params.name)
   .then((product) => res.status(200).send(product))
   .catch(err => res.status(404).json(err));
}

/**
 * @method
 * @description This method use with receive an productname request HTTP GET through middleware from Node.JS and expressJS
 * and response object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var updateProductByProductName = function (req, res, next) {
  productService.updateProductByProductName(req.params.name, req.body)
   .then((product) => res.status(200).send(product))
   .catch(err => res.status(404).json(err));
};

/**
 * @method
 * @description This method use with receive an productname by request HTTP DELETE through middleware
 * from Node.JS and expressJS and response No Content Request. Use method or verb DELETE
 * @param req
 * @param res
 * @param next
 */
var deleteProductByProductName = (req, res, next) => {
  productService.deleteProductByProductName(req.params.name)
  .then(() => res.sendStatus(204))
    .catch(err => res.status(404).json(err));
};

/**
 * @method
 * @description This method use with receive body by request HTTP POST through middleware
 * from Node.JS and expressJS and response the product data with authentication token. Use method or verb POST
 * @param req
 * @param res
 * @param next
 */
/*var authenticateProduct = (req, res, next) => {
  productService.authenticateProduct(req.body)
    .then(product => res.json(product));
};*/

/**
 * @description This definition section is responsible for indicating the methods or verbs that HTTP uses to receive
 * the Request and its respective Response.
 */
router.get('/', getAllProducts);
router.post('/create', createProduct);
router.delete('/:name/delete', deleteProductByProductName)
router.put('/:name/update', updateProductByProductName);
router.get('/:name/detail', getProductByProductName);
//router.post('/authenticate', authenticateProduct);

module.exports = router;
