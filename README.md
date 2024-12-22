# user-reg-log
# REST API for User Registration, Login, and Authentication

This project is a REST API built to handle user registration, login, and authentication, developed using a modern backend framework. The API ensures secure user data handling with robust validation, middleware, and error handling.

---

## Features

- **User Registration**: Create new user accounts with secure password storage.
- **User Login**: Authenticate existing users and provide access tokens.
- **Authentication Middleware**: Protect routes with authentication checks.
- **Password Hashing**: Use bcrypt to store hashed passwords securely.
- **Error Handling**: Centralized error handling with descriptive error messages.
- **Validation**: Input validation for all endpoints to ensure data integrity.
- **Database Integration**: MongoDB for storing user data.

---

## Technologies Used

- **Backend Framework**: Node.js (Express) / Django / Laravel *(choose the one you used)*
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication
- **Password Hashing**: bcrypt
- **Validation**: Joi (for Node.js) or equivalent

---

## File Structure

```
project-root/
|-- controllers/
|   |-- authController.js        # Handles registration and login logic
|-- middlewares/
|   |-- authMiddleware.js        # Protects private routes
|   |-- errorHandler.js          # Centralized error handling middleware
|-- models/
|   |-- User.js                  # User schema for MongoDB
|-- routes/
|   |-- authRoutes.js            # Routes for authentication (register, login)
|-- validations/
|   |-- authValidation.js        # Validation logic for user input
|-- config/
|   |-- db.js                    # Database connection logic
|-- app.js                       # Main app configuration
|-- server.js                    # Starts the server
```

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**:
   ```bash
   npm install  # For Node.js

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root and add the following:
   ```env
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run the Application**:
   ```bash
   npm start  # For Node.js
   python manage.py runserver  # For Django
   php artisan serve  # For Laravel
   ```

5. **Test the API**:
   Use a tool like Postman or cURL to interact with the endpoints.

---

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "userId",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token"
  }
  ```

### Protected Routes
- Add the `Authorization: Bearer <token>` header to access protected endpoints.

---

## Error Handling

All errors are handled centrally using the `errorHandler` middleware. Errors are returned in the following format:

```json
{
  "error": "Error message"
}
```

---

## Validation

User input is validated using a validation library before processing the request. Examples:
- **Registration**: Ensures email is valid, password meets security criteria, and required fields are present.
- **Login**: Ensures email and password are provided.

---

## Future Improvements

- Add email verification during registration.
- Implement password reset functionality.
- Use Redis for session storage to improve performance.

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

