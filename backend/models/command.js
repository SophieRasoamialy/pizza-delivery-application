const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza',
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Order Received', 'In the Kitchen', 'Sent to Delivery'],
        default: 'Order Received'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
