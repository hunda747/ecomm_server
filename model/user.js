const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  fname: {
		type: String,
		required: true,
	},
  lname: {
		type: String,
		required: true,
	},
  email: {
		type: String,
	},
 	phone: {
		type: String,
	},
  password: {
		type: String,
		required: true,
	 },
 	date: {
		type: String,
		required: true,
	 },
 	status: {
		type: String,
		required: true,
	 }
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;


  // save() {
    
  //   try{
  //     db.execute('INSERT INTO user (fname,lname,email,phone_number,password,signUpDate,status) VALUES (?,?,?,?,?,?,?)', 
  //     [  
  //       this.fname,
  //       this.lname,
  //       this.email,
  //       this.phone, 
  //       this.password,
  //       this.date,
  //       this.status
  //     ])

  //   }catch(e){
  //     console.log("user save error: " + e);
  //   }
  // }

  // addAccessKey(email,date,role, AK){
  //   try {
  //     const result = db.execute('INSERT INTO `administrator_user`(`email`, `user_role`, `sign_up_date`, `access_key`, `status`) VALUES (?,?,?,?,?)', [email, role, date , AK , "pending"]);
  //     return result
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchPhone(phone){
  //   try {
  //     const result = db.execute('SELECT * FROM user WHERE phone_number=?', [phone]);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchEmail(email){
  //   try {
  //     const result = db.execute('SELECT * FROM user WHERE email=?', [email]);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchAllUsers(){
  //   try {
  //     const result = db.execute('SELECT * FROM user');
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // fetchAll(email, password) {
  //   try{
  //      const result =db.execute('SELECT * FROM user WHERE userEmail=? AND password=?', [email, password]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   } 
  // }
  
  // checkUser(phone) { 
  //   try{
  //      const result =db.execute('SELECT EXISTS(SELECT * from user WHERE phone_number=?)', [phone]);
  //      return result;
  //   }catch(err){
  //     console.log(err); 
  //   }
  // }
  
  // checkEmail(email) {
  //   try{    
  //      const result =db.execute('SELECT EXISTS(SELECT * from user WHERE email=?)', [email]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // createAdminUser (userName , email ,date, password,key ){
  //   try{
  //     const result =db.execute('INSERT INTO `administrator_user`(`user_name`, `email`, `user_role`, `sign_up_date`, `password` , `access_key`) VALUES (?,?,?,?,?,?)', [userName , email , "manager" , date, password,key])
  //     return result;
  //   }catch(error){
   
  //     console.log(error)
  //   }
  // }
  // addAdministratorAccount (name , email, user_role , access_key, hashPass, date){
  //   try {
  //      const result = db.execute('INSERT INTO administrator_user (user_name , email , user_role , sign_up_date , password, access_key, status) VALUES (?,?,?,?,?,?,?)',[name,email,user_role,date,hashPass, access_key, 'Active']);
  //      return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // updateAdmin (userName, email, password){
  //   try {
  //      const result = db.execute("UPDATE administrator_user SET user_name = ? ,password = ?   WHERE email = ? ", [userName, password, email]);
  //      return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // activatePM( email ,activation){
  //   try { 
  //     const result = db.execute("UPDATE administrator_user SET status = ?   WHERE email = ? ", [activation, email]);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchAdminUser (email){
  //   try {
  //     const result = db.execute("SELECT * FROM administrator_user WHERE email=? " , [email]);
  //     return result;
  //   } catch (error) {
  //     return error
  //   }
  // }
  // changeAdminName (name , email){
  //   try {
  //     const result = db.execute('UPDATE administrator_user SET user_name = ?  WHERE email = ?' ,[name, email]);
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // adminPasswordChange (email , hashPass){
  //   try {
  //     const result = db.execute('UPDATE administrator_user SET password = ? WHERE email = ?', [hashPass , email])
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchNewPM (){
  //   try {
  //      const result = db.execute("SELECT `id`, `user_name`, `email`, `user_role`, `sign_up_date`, `password`, `access_key` , `status` FROM `administrator_user` WHERE user_role != ? " , ["admin"])
  //      return result;
  //     } catch (error) {
  //       return error
  //   }
  // }

  // colCount (userId){
  //   try {
  //     const result = db.execute('SELECT COUNT(reachedCheckout) FROM user_log WHERE userId=?' , [userId])
  //     return result
  //   } catch (error) {
  //     return error
  //   }
  // }

  // countOne (userId){
  //   try {
  //     const result = db.execute('SELECT COUNT(reachedCheckout) FROM user_log WHERE userId=? AND reachedCheckout=?' , [userId,1])
  //     return result
  //   } catch (error) {
  //     return error
  //   }
  // }
  // countZero (userId){
  //   try {
  //     const result = db.execute('SELECT COUNT(reachedCheckout) FROM user_log WHERE userId=? AND reachedCheckout=?' , [userId,0])
  //     return result
  //   } catch (error) {
  //     return error
  //   }
  // }
