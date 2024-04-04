# Pizza Delivery Application

## Description
This is a full stack web application built using React, MongoDB, and Node.js for managing a pizza delivery service. The application allows users to register, log in, and place orders for customized pizzas. It also includes an admin panel for managing inventory, viewing orders, and updating order status.

## Features
- **User Authentication**: Complete registration and login system for both users and admins, with email verification and forgot password functionality.
- **Dashboard**: Users can view available pizza varieties in the dashboard after logging in.
- **Custom Pizza Creation**: Users can create custom pizzas by choosing from a variety of options including pizza base, sauce, cheese, and toppings.
- **Payment Integration**: Integration with Razor Pay checkout for secure payments in test mode.
- **Admin Inventory Management**: Admin panel for managing inventory of pizza ingredients such as base, sauce, cheese, veggies, and meat.
- **Order Management**: Automatic update of inventory after each order and presentation of changes in the admin dashboard.
- **Notification System**: Automatic email notifications to the admin when available stock falls below a threshold value.
- **Order Status Update**: Admins receive orders and can change the status of the pizza (order received, in the kitchen, sent to delivery), with updates reflected in the user dashboard.

## Installation and Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies for both backend and frontend:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Define variables such as `MONGODB_URI`, `RAZORPAY_KEY`, `RAZORPAY_SECRET`, and `EMAIL_HOST`.
5. Run the development servers:
   - Start the backend server:
     ```bash
     node backend/app.js
     ```
   - Start the frontend server:
     ```bash
     cd frontend && npm start
     ```
6. Access the application at `http://localhost:3000`.

## Technologies Used
- React
- MongoDB
- Node.js
- Express.js
- Razor Pay
- Nodemailer


