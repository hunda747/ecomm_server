const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {
		type: String,
		required: true,
	},
  productPrice: {
		type: Number,
		required: true,
	},
  productBrand: {
		type: String,
		required: true,
	},
  productCategory: {
		type: String,
		required: true,
	},
  productDetail: {
		type: String,
		required: true,
	 },
 	productImg: {
		type: String,
		required: true,
	 },
 	amount: {
    type: Number,
    required: true,
  },
 	status: {
    type: Number,
    required: true,
  },
 	visits: {
    type: Number,
    required: true,
  },
 	rating: {
    type: Number,
    required: true,
  },
  productCostPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;



  // static fetchActive() {
  //   try{
  //      const result =db.execute('SELECT * FROM product WHERE status = ?', [1]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  // static fetchDiactive(){
  //   try {
  //      const result = db.execute('SELECT * FROM  product WHERE status= ?',[0]);
  //      return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // //fetch all categories function
  // static fetchAllCategory(){
  //   try {
  //     const result = db.execute('SELECT * FROM category');
  //     return result;
  //   } catch (error) {
  //       console.log(err)  
  //   }
  // }

  // static fetchAll() {
  //   try{
  //      const result =db.execute('SELECT * FROM product');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchSearch(name) {
  //   try{
  //      const result =db.execute('SELECT * FROM product WHERE product.productName = ?', [name]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchByCategory(name) {
  //   try{
  //      const result =db.execute('SELECT * FROM product WHERE productCategory = ? AND status =?', [name, '1']);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  // static fetchRand(){ 
  //   try {
  //      const result = db.execute('SELECT * FROM product WHERE status = ? ORDER BY date DESC', ['1'])
  //      return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // static fetchByName (name){
  //   try {
  //      const result = db.execute('SELECT * FROM product WHERE productName= ? AND status = ?',[name,'1'])
  //      return result
  //   } catch (error) {
  //      console.log(error)
  //   }
  // }
  
  // static findById(id) {
  //   return db.execute('SELECT * FROM product WHERE product.id = ?', [id]);
  // }

  // //reduct count in stock
  // static reduceStock( id , qty){
  //   try {
  //     const result = db.execute('UPDATE product SET countInStock = ? WHERE  id = ?' , [qty, id]);
  //     return result
  //   } catch (error) {
  //      console.log(error)
  //   }
  // }
  // //return product to stock
  // static returnToStock (id,qty){
  //   try {
  //     const result = db.execute('UPDATE product SET countInStock = ? WHERE id=?' , [qty, id])
  //     return result
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // static deleteProductById(id){
  //   return db.execute('UPDATE `product` SET `status`= 0 WHERE product.id=?' , [id])
  // }

  // static updateProduct(id,name,price,brand,category,detail,image,count_in_stock,status){
  //   return db.execute("UPDATE product SET productName= ? , productDetail= ?,productPrice=?,productCategory=?,productBrand=?,countInStock=?, status=?  WHERE id=?" , [name,detail,price,category,brand,count_in_stock,status,id])
  // }

  // static findByName(name) {
  //   return db.execute('SELECT * FROM product WHERE product.productName LIKE ? AND product.status = ?', ["%"+name+"%", '1']);
  // }

  // static findByNameCategory(name, category) {
  //   try {
  //    const result = db.execute('SELECT * FROM product WHERE productCategory = ? AND productName LIKE ? AND status =?', [category, "%"+name+"%", '1']);
  //     return result
  //   } catch (error) {
  //      return error
  //   }
  // }

  // //record search 
  // static recordSearch(name, catagory){
  //  const date = new Date()
  //   return db.execute('INSERT INTO search_history (search_key, search_category , search_date) VALUES (?,?,?)', [name,catagory ,date]);
  // }
  // //record add_to_cart
  // static recordAddToCart(id, quantity ,userId){
  //   const date = new Date();
  //   return db.execute('INSERT INTO cart_history (product_id, qty, date, userId) VALUES (?,?,?,?)' , [id , quantity , date, userId]);

  // }
  // static addVisits(id){
  //   return db.execute('UPDATE product SET visits = visits + 1 WHERE product.id = ?', [id]);
  // }
  // //commenting on a product
  // static productReview (userId,productId, productName,comment,date){
  //   try {
  //      const result = db.execute("INSERT INTO product_review(user_id, product_id, product_name, comment, date) VALUES (?,?,?,?,?)", [userId,productId,productName,comment, date])
  //      return result;
  //   } catch (error) {
  //     console.log("error from product review submission")
  //     console.log(error)
  //   }
  // }
  // static fetchComment (id){
  //   try {
  //     const result = db.execute("SELECT * FROM product_review WHERE product_id=?", [id]);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   } 
  // }

  // static fetchTopFive (){
  //   try {
  //     const result = db.execute('SELECT * FROM product WHERE status=? ORDER BY date DESC' , ['1']);
  //     return result
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

 