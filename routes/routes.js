const express = require('express');
const router = express.Router();
 
   
// const {getProducts, getAllProducts,addProduct, getProductsByCatagory, getProductsById,
// getProductsBySearch, deleteProduct ,editProductValues ,recordSearchHistory, recordAddToCartHistory,changeVisits,getActiveProducts, getDiactiveProducts, commentHandler ,getComments,getTopFive,sellProduct,returnProduct} =  
// require('../controller/productController');

// const {getUser, getAllUser, addUserByPhone , getAdminUser, verifyAdmin, addUserByEmail, checkUser, checkEmail , getAdminUserName ,changeAdminUserName, changeAdminPassword , createAdminAccount} = require('../controller/userController')

// const {addOrder, getOrders, getInprogressOrders, getOrdersbyId, changeStatus, getPendingOrders, changeStatusAccept,changeStatusComplete, getOrdersbyDeliveryId, getCompleteOrders, countOrderById, getRecentOrderLocations, getPendingOrderCount,getOrdersbyIdDate, getCompleteOrdersByDate,getOrdersbyDeliveryIdAndDate} =  require('../controller/ordersController')


// const { addOrderDetail, getOrderDetails, getTopProductByQuan, 
// getTopProductByTotalSale } = require('../controller/orderDetailController');

// const { getOrderReports, getLastWeekOrderReports, getTotalOrder, addOrderReport , updateReports,getMonthsOrderReports, getMonthOrderReports, getWeeksOrderReports} = require('../controller/orderReportController');

// const { getOrderLogs, addOrderLog ,getUserLogs, getUserLogInHour, getDeviceType,getUserByActivity, getUserByHistory} = require('../controller/orderLogController')

// const {loginWithPhone , adminRegister } = require('../controller/loginController')

// const {getAllCategories, addCategory} = require('../controller/categoryController')

// const {getNewProductManager , accessKeyGenerator , saveAccessKey, activatePM, diactivatePM} = require('../controller/productManagerController')

// const {calcCheckoutRate,getRecentCart} = require('../controller/calcController');

// const { route } = require('express/lib/application');

// const { users, userEmails, deleteP, verify} = require('../controller/api')



// router.post('/update' , updateReports);

// // router.get('getProductDetail/${id}' , getProductDetail)
// router.post('/getAdminUser' , getAdminUser);
// router.post('/getAdminUserVer', verifyAdmin ,getOrderLogs);
// // router.post('/addAdmin', addUserByEmail)
// router.post('/adminRegister' , adminRegister)


// // user log routes
// router.post('/addUserLogs', addOrderLog);
// router.post('/getUserLogs', getOrderLogs);
// router.post('/getUserLogCount', getUserLogs);
// router.post('/getUserLogCountInDay', getUserLogInHour);
// router.post('/getUserLogHistory', getUserByHistory);
// router.post('/getUserLogActivity', getUserByActivity);

// // test user api
// router.post('/app', users);
// router.post('/appUser', userEmails);
// router.post('/appver', verify);
// router.post('/appDelete', verify,  deleteP);

// // report generator
// router.post('/addOrderReport', addOrderReport);
// router.post('/getOrderReport', getOrderReports);
// router.post('/getLastWeekOrderReport', getLastWeekOrderReports);
// router.post('/getTotal', getTotalOrder)
// router.post('/getMonthYearOrderReport', getMonthsOrderReports)
// router.post('/getWeekReport', getWeeksOrderReports)
// router.post('/getMonthDayOrderReport', getMonthOrderReports)

// //get all the categories from db
// router.get('/getAllCategories', getAllCategories)
// router.post('/addCategory', addCategory)

// // product routes 
// router.post('/addToStock' , addProduct); 
// router.get('/getProducts', getProducts);
// router.get('/getAllProducts' ,getAllProducts);
// router.get('/getActiveProducts' , getActiveProducts)
// router.get('/getDiactiveProducts', getDiactiveProducts)

// router.post('/getProductsByCategory', getProductsByCatagory);
// router.post('/getProductsById', getProductsById);
// router.post('/getProductsBySearch', getProductsBySearch);


// router.post('/deleteProductById' , deleteProduct)
// router.post('/editProduct' , editProductValues)

// // product visit add routes
// router.post('/addVisits', changeVisits)

// // user routes
// // router.post('/addUser', addUser); 

// router.post('/addUserByPhone', addUserByPhone)
// router.post('/addUserByEmail', addUserByEmail)
// router.post('/getUsers', getUser); 
// router.post('/getAllUsers' , getAllUser)
// router.post('/checkUserPhone', checkUser)
// router.post('/checkEmail', checkEmail) 

// //get product manager route
// router.get('/getNewProductManager' , getNewProductManager)


// // order routes
// router.post('/addOrder', addOrder);
// router.post('/getOrders', getOrders);
// router.post('/getInprogressOrders', getInprogressOrders);
// router.post('/getPendingOrders', getPendingOrders);
// router.post('/getCompleteOrders', getCompleteOrders);
// router.post('/getOrdersbyDeliveryId', getOrdersbyDeliveryId);
// router.post('/getOrdersbyDeliveryIdAndDate', getOrdersbyDeliveryIdAndDate);
// router.post('/getOrdersById', getOrdersbyId);
// router.post('/getCompleteOrdersByDate', getCompleteOrdersByDate);
// router.post('/getOrdersbyIdDate', getOrdersbyIdDate);
// router.post('/countOrderById', countOrderById);
// router.post('/changeStatus', changeStatus);
// router.post('/changeStatusComplete', changeStatusComplete);
// router.post('/changeStatusAccept', changeStatusAccept);

// // orderDetail routes
// router.post('/addOrderDetail', addOrderDetail);
// router.post('/getOrdersDetail', getOrderDetails);
// router.post('/getTopProductByQuan', getTopProductByQuan);
// router.post('/getTopProductByTotalSale', getTopProductByTotalSale);

// //search record router
// router.post('/productSearchRecord' , recordSearchHistory);

// //addToCart record router
// router.post('/addToCartRecord' , recordAddToCartHistory )

// //login routes
// router.post('/loginWithPhone', loginWithPhone);


// //generate access key for product manager
// router.post('/generateAccessKey' , accessKeyGenerator)
// router.post('/saveAccessKey' , saveAccessKey);

// //activate admin user

// router.post('/activation' , activatePM)
// router.post('/deactivation', diactivatePM)


// //submitting comment
// router.post('/addComment', commentHandler);
// router.post('/getComment' , getComments);

// //getting top five products
// router.post('/getTopProducts' , getTopFive)

 

// //user analysis
// router.post('/getUserCheckoutRate', calcCheckoutRate)
// // router.post('/getRecentCartHistory' , getRecentCart)

// //router to get the admin user name
// router.post('/getAdminUserName' , getAdminUserName)

// router.post('/changeAdminUserName' , changeAdminUserName) 
// router.post('/changeAdminPassword', changeAdminPassword)

// router.post('/createAdminAccount' , createAdminAccount)

 
// //selling products  
// router.post('/sellProduct' , sellProduct)
// // returning product
// router.post('/returnProduct' , returnProduct)


// //get recent purchase location
// router.post('/purchasedFrom' , getRecentOrderLocations)


// router.get('/getPendingOrderCount' , getPendingOrderCount)
// module.exports = router;



router.get('/' , (req,res)=>{
  res.send("this is the home url /");
})
 