# E-commerce API with Node.js and MongoDB

This is a RESTful API for an e-commerce application built using Node.js and MongoDB. It provides endpoints to perform various operations related to managing products, categories, carts, orders, and user authentication.

## Setup

1. Clone the repository:

2. Install dependencies:

3. Set up your MongoDB database and configure the connection string in `config/db.js`.


4. Start the server:

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in and obtain a JWT token.

### Categories

- **GET /categories**: Retrieve a list of categories.

### Products

- **GET /products/:categoryId**: Retrieve a list of products by category.
- **GET /products/:productId**: Retrieve details of a specific product by ID.

### Cart

- **POST /cart/add**: Add a product to the cart.
- **GET /cart/view**: View the cart.
- **PUT /cart/update**: Update quantities of products in the cart.
- **DELETE /cart/remove**: Remove a product from the cart.

### Orders  

- **POST /orders/place**: Place an order with products from the cart.
- **GET /orders/history**: Retrieve order history.
- **GET /orders/:orderId**: Retrieve details of a specific order by ID.

## Authentication

- **POST /auth/register**: Signup 
- **POST /auth/login**: Login

The API uses JSON Web Tokens (JWT) for user authentication. Each authenticated request should include a JWT token in the Authorization header.

## Error Handling

The API handles errors gracefully and returns meaningful error messages and status codes when necessary.

## Design Decisions

- **Database**: MongoDB was chosen as the database due to its flexibility and scalability, which suits the requirements of an e-commerce application.
- **Authentication**: JWT was used for user authentication as it provides a stateless mechanism for verifying user identity.
- **Middleware**: Middleware functions were used to handle authentication and other cross-cutting concerns such as error handling.
- **RESTful API**: The API follows RESTful principles for designing endpoints and resource naming conventions.

## API Documentation

API documentation can be found in the respective controller files and can be generated using tools like Swagger for better accessibility and understanding.

## Testing

It's recommended to thoroughly test each API endpoint using tools like Postman. 
