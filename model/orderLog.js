const mongoose = require('mongoose');

const UserLogSchema = new mongoose.Schema({
  href: {
		type: String,
		required: true,
	},
  referrer: {
		type: String,
		required: true,
	},
  screenWidth: {
		type: Number,
		required: true,
	},
  screenHeight: {
    type: Number,
		required: true,
	},
  addToCart: {
    type: Number,
    required: true,
  },
  reachedCheckout: {
    type: Number,
    required: true,
  },
  purchased: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  }
});

const UserLog = mongoose.model("UserLog", UserLogSchema);
module.exports = UserLog;


 
  // static fetchAll() {
  //   try{
  //      const result =db.execute('SELECT * FROM user_log');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchTotalUser() {
  //   try{
  //      const result =db.execute('SELECT COUNT(id) AS userNo FROM user_log');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static addToCartCount() {
  //   try{
  //      const result =db.execute('SELECT COUNT(addToCart) AS cartCount FROM `user_log` WHERE addToCart = true');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static reachCheckCount() {
  //   try{
  //      const result =db.execute('SELECT COUNT(reachedCheckout) AS checkoutCount FROM `user_log` WHERE reachedCheckout = true');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static purchaseCount() {
  //   try{
  //      const result =db.execute('SELECT COUNT(purchased) AS purchaseCount FROM `user_log` WHERE purchased = true;');
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  
  // static addToCartCountByDate(date) {
  //   try{
  //      const result =db.execute('SELECT COUNT(addToCart) AS cartCount FROM `user_log` WHERE addToCart = true  AND date=?', [date]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static reachCheckCountByDate(date) {
  //   try{
  //      const result =db.execute('SELECT COUNT(reachedCheckout) AS checkoutCount FROM `user_log` WHERE reachedCheckout = true  AND date=?', [date]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static purchaseCountByDate(date) {
  //   try{
  //      const result =db.execute('SELECT COUNT(purchased) AS purchaseCount FROM `user_log` WHERE purchased = true AND date=?', [date]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchTotalUserByDate(date) {
  //   try{
  //      const result =db.execute('SELECT COUNT(id) AS userToday FROM user_log WHERE date=?', [date]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }


  // static fetchTotalUserByDateHour(date, hour) {
  //   try{
  //      const result =db.execute('SELECT COUNT(id) AS userHour FROM user_log WHERE date=? AND time LIKE ?', [date, hour + ':%']);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchDeviceType() {
  //   try{
  //      const result =db.execute("select sum(case when screenWidth <= 414 then 1 else 0 end) as phone, sum(case when screenWidth > 601 and screenHeight < 962 and screenWidth <= 1280 and screenHeight>= 800 then 1 else 0 end) as tablet, sum(case when screenWidth > 1024 and screenHeight > 798 and screenWidth <= 1980 and screenHeight <= 1080 then 1 else 0 end) as desktop from user_log");
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchByLocation() {
  //   try{
  //      const result =db.execute("SELECT city, state, COUNT(state) AS session FROM user_log GROUP BY state ORDER BY COUNT(state) DESC LIMIT 5");
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchUserByActivity(date, days) {
  //   try{
  //      const result =db.execute("SELECT user.id,user_log.userId, user.fname, user.lname, user.phone_String, user.email, user.signUpDate, COUNT(user_log.userId) as visit, COUNT(case user_log.purchased when 1 then 1 else null end) AS purchase FROM user_log INNER JOIN user ON user_log.userId = user.id WHERE date > DATE_SUB(?, INTERVAL ? DAY) AND userId != 0 GROUP BY userId ORDER BY purchase DESC",[date, days]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // static fetchByUserHistory(date, day) {
  //   try{
  //      const result =db.execute("SELECT user.id,user_log.userId, user.fname, user.lname,user.phone_String, user.email, user.signUpDate, COUNT(user_log.userId)  as visit, COUNT(case user_log.purchased when 1 then 1 else null end) AS purchase FROM user_log INNER JOIN user ON user_log.userId = user.id WHERE date > DATE_SUB(?, INTERVAL ? DAY) AND userId != 0 GROUP BY userId ORDER BY COUNT(userId) DESC", [date, day]);
  //      return result;
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
