const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const OrderSchema = new Schema({
	masaNo: {
		type: String,
		maxlength: 100,
        minlength: 2,
        default:'2'
	},
	surname: {
		type: String,
		maxlength: 60,
		minlength: 2
	},
	bio: {
		type: String,
		maxlenght: 1000,
		minlength: 10
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('order', OrderSchema);