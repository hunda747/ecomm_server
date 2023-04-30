const OrderModle = require('../model/order');
const UserModel = require('../model/user');

const addOrder = async (req, res) => {
  const date = req.body.date;
  const userId = req.body.userId;
  const total = req.body.total;  
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const contact = req.body.contact;
  const cost = req.body.cost;
  const no_item  = req.body.no_item;
  const orderItems = req.body.orders;
  const address  = req.body.address;


  console.log(orderItems);
  try{
    const Orders = await OrderModle.create({date,userId,total,status: "pending", latitude, longitude, contact, cost, no_item,orders: orderItems, address});
    res.sendStatus(200);
  }catch(e){ 
    console.log('orders error: ' + e);
  }
} 
// .populate("userId", "fname phone")
const getOrders = async(req,res) => {
  const order = await OrderModle.find({}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  
  res.send(order);
}

const getInprogressOrders = async(req,res) => {
  const order = await OrderModle.find({status: "inProgress"}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  console.log(order);
 // res.send(order.splice(0,4));
  try {
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
}

const getCompleteOrders = async(req,res) => {
  const order = await OrderModle.find({status: "complete"}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  console.log(order);
 // res.send(order.splice(0,4));
  try {
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
}

const getCompleteOrdersByDate = async(req,res) => {
  const date = req.body.date;
  const order = await OrderModle.find({status: "inProgress", date: date}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  
  res.send(order);
}

const getPendingOrders = async(req,res) => {
  const order = await OrderModle.find({status: "pending"}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  console.log(order);
 // res.send(order.splice(0,4));
  res.send(order);
}

const getOrdersbyId = async (req,res) => {
  const id = req.body.id;
  const order = await OrderModle.find({id: id}).populate("userId", "fname phone").populate({
    path: 'orders',
    populate: { path: 'productId'}
  });  
  
  // console.log(order);
  try{
    res.send(order);
  }catch(e){
    res.status(401).send(e)
    console.log(e);
  }
}

// const getOrdersbyIdDate = async (req,res) => {
//   const id = req.body.id;
//   const date = req.body.date;

//   const order = await OrderModle.find({id: id, date: date}).populate("userId", "fname phone").populate({
//     path: 'orders',
//     populate: { path: 'productId'}
//   });  
  
//   // console.log(order);
//   try{
//     res.send(order);
//   }catch(e){
//     res.status(401).send(e)
//     console.log(e);
//   }
// }

// const getOrdersbyDeliveryId = async (req,res) => {
//   const id = req.body.id;
//   const [order, metaData] = await OrderModle.fetchOrdersCompleteByDeliveryId(id)
  
//   // console.log(order);
//   try{
//     res.send(order);
//   }catch(e){
//     res.status(401).send(e)
//     console.log(e);
//   }
// }

// const getOrdersbyDeliveryIdAndDate = async (req,res) => {
//   const id = req.body.id;
//   const date = req.body.date;
//   const [order, metaData] = await OrderModle.fetchOrdersCompleteByDeliveryIdAndDate(id, date)
  
//   // console.log(order);
//   try{
//     res.send(order);
//   }catch(e){
//     res.status(401).send(e)
//     console.log(e);
//   }
// }

const changeStatusAccept = async(req, res) => {
  const id = req.body.id;
  const status = "inProgress";
  const deliveryID = req.body.deliveryID;
  try{
    // const [order, metaData] = await OrderModle.changeStatusAccept(id, status, deliveryID);
    const order = await OrderModle.findOneAndUpdate({_id: id},{status: status,deliveryID: deliveryID});
    console.log(order);
  } catch(e){
    console.log(e);
  }
  res.sendStatus(200);  
}

const changeStatusComplete = async(req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  const deliveredDate = new Date().toISOString().slice(0, 10);
  try{
    const order = await OrderModle.findOneAndUpdate({_id: id},{status: status, deliveredDate: deliveredDate});
  } catch(e){
    console.log(e);
  }
  res.sendStatus(200);  
}

const changeStatus = async(req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  try{
    const order = await OrderModle.findOneAndUpdate({_id: id},{status: status});
  } catch(e){
    console.log(e);
  }
  res.sendStatus(200);  
}

// const countOrderById = async(req, res) => {
//   const id = req.body.id;
//   const [order, metaData] = await OrderModle.countOrderById(id);
//   const noOrders = order[0];
//   console.log(noOrders);
//   try{
//     res.send(noOrders);  
//   } catch(e){
//     console.log(e);
//   }
// }

// const getRecentOrderLocations = async (req,res)=>{
//   const {id} = req.body;

//   if(id === ''){
//     res.json({
//       status: 404,
//       message: "User Not Found"
//     })
//   }else{
//      const [data, metaData] = await OrderModle.fetchCompleteById(id);
//      if(data.length === 0){
//        res.json({
//         status: 201,
//         message: "User Has no Recent Orders"
//        })
//      }else {   
//        res.send(data)

//      }
//   }


// }

// const getPendingOrderCount = async (req,res)=>{
//   const [data, metaData]= await OrderModle.fetchPendingCount();
//   res.json(data.length)
// }

module.exports = {
	addOrder,
  // countOrderById,
	getOrders,
  getInprogressOrders,
  getOrdersbyId,
  changeStatus,
  getPendingOrders,
  changeStatusComplete,
  changeStatusAccept,
  // getOrdersbyDeliveryId,
  getCompleteOrders,
  // getRecentOrderLocations,
  // getPendingOrderCount,
  // getOrdersbyDeliveryIdAndDate,
  // getOrdersbyIdDate,
  getCompleteOrdersByDate
};