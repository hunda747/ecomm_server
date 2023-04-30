const express = require('express');
const router = express.Router();

const {getUser, addUserByEmail,addUserByPhone,
  getAllUser} = require('../controller/userController');

const {getAllCategories, addCategory} = require('../controller/categoryController');

const {getProducts,getAllProducts, getActiveProducts,getDiactiveProducts,addProduct,getTopFive,sellProduct,returnProduct,getProductsByCatagory,getProductsById,getProductsBySearch,deleteProduct} = require('../controller/productController');

const {addOrder, getOrders,getInprogressOrders,
  getOrdersbyId,
  changeStatus,
  getPendingOrders,
  changeStatusComplete,
  getCompleteOrders,
  getCompleteOrdersByDate,
  changeStatusAccept} = require('../controller/ordersController');

router.get('/' , (req, res) => {
  res.send('hello body');
});

//orders
router.post('/addOrder', addOrder);
router.post('/getOrders', getOrders);
router.post('/getInprogressOrders', getInprogressOrders);
router.post('/getPendingOrders',getPendingOrders);
router.post('/getCompleteOrders',getCompleteOrders);
router.post('/getCompleteOrdersByDate',getCompleteOrdersByDate);
router.post('/getOrdersbyId',getOrdersbyId);
router.post('/changeStatus',changeStatus);
router.post('/changeStatusComplete',changeStatusComplete);
router.post('/changeStatusAccept',changeStatusAccept);


// users
router.post('/addUserByEmail', addUserByEmail);
router.post('/addUserByPhone', addUserByPhone);
router.post('/getUsers', getAllUser);
router.post('/getUser', getUser);

// product
router.post('/getProduct', getProducts);
router.post('/getAllProducts', getAllProducts);
router.post('/getTopProducts', getTopFive);
router.post('/addProduct', addProduct);
router.post('/addToStock' , addProduct); 
router.get('/getProducts', getProducts);
router.get('/getAllProducts' ,getAllProducts);
router.get('/getActiveProducts' , getActiveProducts)
router.get('/getDiactiveProducts', getDiactiveProducts)
router.post('/getProductsByCategory', getProductsByCatagory);
router.post('/getProductsById', getProductsById);
router.post('/getProductsBySearch', getProductsBySearch);
router.post('/deleteProductById' , deleteProduct)
// router.post('/editProduct' , editProductValues)

// category
router.get('/getCategory', getAllCategories);
router.post('/addCategory', addCategory);
// 
module.exports = router;