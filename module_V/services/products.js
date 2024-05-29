var Promise = require('bluebird');
var products = require('../mocks/products.json');
var db = require('../config/db.js');
var Product = db.Product;
//var jwt = require('jsonwebtoken');
//var config = require('../middlewares/config.json');


/**
 * @type {{error: string}}
 */
var error = {error: "error"};

/**
 * @method
 * @description This method use for get all list of products
 */
var getAllProducts = async function () {
  return await Product.find().select('name product_type quantity price latitude longitude status id').exec();
};

/**
 * @method
 * @param productParam
 * @description This method use for create product, and receive productParam object
 */
var createProduct = async function (productParam) {
  if (await Product.findOne({name: productParam.name})) {
    throw {code: 409, message: 'Product ' + productParam.name + ' is already taken'};
  }
  var product = new Product(productParam);
  product.status = true;
  await product.save();

  return getProductByProductName(productParam.name);
};

/**
 * @method
 * @param productParam
 * @description This method use for get product by name, and receive name object
 */
var getProductByProductName = async function (name) {
  var product = await Product.findOne({name: name, status: true})
    .select('product_type quantity price latitude longitude status id').exec();

  if (!product) {
    throw {code: 404, message: 'Product ' + name + ' does not exist'};
  }

  return product;
};

/**
 * @method
 * @description This method use for update product by productname, and receive productname object
 * @param productname
 * @param productParam
 */
var updateProductByProductName = async function (name, productParam) {
  var productForUpdate = await Product.findOne({name: name, status: true});

  if (!productForUpdate) {
    throw {code: 404, message: 'Product ' + name + ' does not exist'};
  }

  var productUpdatedResult = await Product.findByIdAndUpdate(productForUpdate.id,
    {quantity: productParam.quantity, price: productParam.price, longitude: productParam.longitude, latitude: productParam.latitude});

  if (productUpdatedResult && productUpdatedResult.errors) {
    throw {code: 400, message: productUpdatedResult.errors};
  }

  return getProductByProductName(productForUpdate.name);
};

/**
 * @method
 * @description This method use for delete product by productname
 */
var deleteProductByProductName = async function (name) {
  var productForSoftDelete = await Product.findOne({name: name, status: true});

  if (!productForSoftDelete) {
    throw {code: 404, message: 'Product ' + name + ' does not exist'};
  }

  var productSoftDeleteResult = await Product.findByIdAndUpdate(productForSoftDelete.id,
   {status: false});

  if (productSoftDeleteResult && productSoftDeleteResult.errors) {
    throw {code: 400, message: productSoftDeleteResult.errors};
  }
};

/**
 * @method
 * @description This method use for sign product by productname and productType
 * @param productname
 * @param productType
 */
/*var authenticateProduct = async ({name, product_type}) => {
  var productAuth = Product.find();
    productAuth.token = jwt.sign(
      {
        sub:
          {
            name: productAuth.name,
            product_type: productAuth.product_type,
            quantity: productAuth.quantity,
            price: productAuth.price,
            latitude: productAuth.latitude,
            longitude: productAuth.longitude,
            locale: 'CO',
            roles: {
              is_admin: true,
              is_user: true
            }
          }
      },
      config.secret,
      {expiresIn: '120m'}
    );
};*/   

module.exports = {
  getAllProducts,
  createProduct,
  getProductByProductName,
  updateProductByProductName,
  deleteProductByProductName,
  //authenticateProduct
};