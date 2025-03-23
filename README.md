# URL Shortener Project

This is a URL Shortener project built with **Node.js, Express, MongoDB, and JWT Authentication**. It allows users to shorten long URLs, track visit history, and manage their links securely.

---

## Features
- **User Authentication** (Signup/Login with JWT tokens)
- **Shorten Long URLs**
- **Track Analytics** (View number of visits per URL)
- **User-Specific URLs** (Users can only see their own shortened links)
- **Secure Password Storage** using `bcrypt`
- **JWT-Based Authentication** with `httpOnly` cookies

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT (JSON Web Token), bcrypt for password hashing
- **Frontend:** EJS (Embedded JavaScript)
- **Middleware:** Cookie-parser, Express middleware for authentication

---

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb://localhost:27017/short-url
JWT_SECRET=your_secret_key
PORT=8001
```

### 4. Start the Server
```sh
npm start
```
Server will run at: **http://localhost:8001/**

---

## Authentication & Authorization
- **User Signup** → Registers a new user with hashed password.
- **User Login** → Generates a JWT token and stores it in an HTTP-only cookie.
- **Protected Routes** → Users can only access their own URLs.

### User Authentication API Endpoints
| Route         | Method | Description |
|--------------|--------|-------------|
| `/user/signup` | `POST` | Register a new user |
| `/user/login` | `POST` | Login and get a JWT token |
| `/user/logout` | `GET` | Logout by clearing the JWT cookie |

### Short URL API Endpoints
| Route             | Method  | Description |
|------------------|--------|-------------|
| `/url/`         | `POST` | Shorten a new URL |
| `/url/:shortId` | `GET`  | Redirect to original URL |
| `/url/analytics/:shortId` | `GET` | View visit history of a URL |

---

## How It Works
1. **User signs up** → Password is hashed using `bcrypt`.
2. **User logs in** → A JWT token is generated and stored in a cookie.
3. **User shortens a URL** → Stored in MongoDB with a unique `shortId`.
4. **When visiting `/url/:shortId`** → Redirects to the original URL and logs visit history.
5. **Users can only see their own URLs** → Thanks to authentication middleware.

---

## Security Features
- **Passwords are hashed** using `bcrypt` (No plaintext passwords)
- **JWT is stored in an HTTP-only cookie** (Prevents XSS attacks)
- **Protected routes** with middleware (`authenticateToken`)
- **MongoDB injection prevention** by using Mongoose ORM

---

## Next Steps & Improvements
- Implement **logout functionality** by clearing JWT.
- Add **rate limiting** to prevent abuse.
- Deploy to a cloud platform (Heroku, Vercel, or AWS).

---

## Troubleshooting
### MongoDB Not Connecting?
Check if MongoDB is running:
```sh
mongod --version
```
If not installed, [download MongoDB](https://www.mongodb.com/try/download/community).

### JWT Authentication Not Working?
Ensure you have set `JWT_SECRET` in your `.env` file.

### Cookies Not Being Set?
Try using `Secure: false` in development inside `res.cookie()`:
```js
res.cookie("token", token, { httpOnly: true, secure: false });
```

---

## Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## License
This project is **MIT Licensed**. Feel free to use and modify it.

---

## Author
- **Your Name** (@punitsukhani)

