# 🛒 FreshCart - Online Grocery Store

A full-stack online grocery shopping application built with the MERN stack (MongoDB, Express.js, React, Node.js).

![FreshCart Banner](client/src/assets/banner.png)

## ✨ Features

- **User Authentication** - Register, Login, OTP verification, Forgot/Reset password
- **Product Management** - Browse products by categories and subcategories
- **Shopping Cart** - Add/remove items, update quantities
- **Order Management** - Place orders, track order history
- **Address Management** - Save multiple delivery addresses
- **Admin Dashboard** - Manage products, categories, subcategories
- **Payment Integration** - Stripe payment gateway
- **Responsive Design** - Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Cloudinary for image storage
- Stripe for payments
- Resend for emails

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Cloudinary account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/freshcart.git
   cd freshcart
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret
   RESEND_API_KEY=your_resend_api_key
   FRONTEND_URL=http://localhost:5173
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── utils/         # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── ...
│
├── server/                 # Node.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
│
└── README.md
```

## 📱 Screenshots

### Home Page
Browse categories and featured products

### Product Page
View product details and add to cart

### Cart & Checkout
Review cart items and complete purchase

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.





