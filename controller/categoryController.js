
const CategoryModel = require('../model/category');

const addCategory = async (req, res) => {
  const {ctgr_title, ctgr_value, ctgr_rating, ctgr_img} = req.body;

  try{
    const Category = await CategoryModel.create({
      ctgr_title, ctgr_value, ctgr_rating, ctgr_img
    });
    res.sendStatus(200);
  } catch(e) {
    console.log(e);
  }  
}   

const getAllCategories = async (req,res)=>{
  console.log("getting all the categories for you");
  const category = await CategoryModel.find({});
  console.log(category);

  // console.log(category),
  res.send(category);
}

module.exports ={   
  getAllCategories,
  addCategory
}