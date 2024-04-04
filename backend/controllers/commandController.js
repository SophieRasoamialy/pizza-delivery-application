const Order = require('../models/order');

// Function to create a new order
exports.createOrder = async (req, res) => {
    try {
        const { user, items, totalPrice } = req.body;
        const newOrder = new Order({ user, items, totalPrice });
        await newOrder.save();
        res.status(201).json({ message: 'New order created successfully', data: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get an order by its ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update an order
exports.updateOrder = async (req, res) => {
    try {
        const { status, paymentStatus } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status, paymentStatus }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order updated successfully', data: updatedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete an order
exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully', data: deletedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
