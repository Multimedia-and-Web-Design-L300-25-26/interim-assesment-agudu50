# Coinbase Clone Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Copy `.env.example` to `.env` and fill in your values:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/coinbase-clone
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Start MongoDB
Make sure MongoDB is running on your machine.

### 4. Run the Server
```bash
npm start          # Production
npm run dev        # Development (with nodemon)
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### User
- `GET /api/auth/profile` - Get user profile (protected)

### Crypto
- `GET /api/crypto` - Get all cryptocurrencies
- `GET /api/crypto/gainers` - Get top gainers
- `GET /api/crypto/new` - Get new listings
- `POST /api/crypto` - Add new cryptocurrency (protected)
