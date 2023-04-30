const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  ctgr_title: {
		type: String,
		required: true,
	},
  ctgr_value: {
		type: String,
		required: true,
	},
  ctgr_rating: {
		type: Number,
		required: true,
	},
  ctgr_img: {
		type: String,
		required: true,
	}
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;


 

  // static fetchAll(id) {
  //   try{
  //      const result =db.execute('SELECT * FROM `category` WHERE 1');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchAllCategory(){
  //   try {
  //     const result = db.execute('SELECT * FROM category');
  //     return result;
  //   } catch (error) {
  //       console.log(err)  
  //   }
  // }

