const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  date: {
		type: String,
		required: true,
	},
  userId: {
		type: mongoose.Schema.ObjectId,
    ref: "Users",
		required: true,
	},
  total: {
		type: Number,
		required: true,
	},
  status: {
		type: String,
		required: true,
	},
  latitude: {
		type: Number,
		required: true,
	},
  longitude: {
		type: Number,
		required: true,
	},
  contact: {
		type: String,
		required: true,
	},
  cost: {
		type: Number,
		required: true,
	},
  no_item: {
		type: Number,
		required: true,
	},
  deliveryPerson: {
		type: Number,
	},
  deliveredDate: {
		type: String,
	},
  orders: [{
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  address: {
		type: String,
		required: true,
	}
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;