# URL-SHORTNER-
🔗 URL Shortener Backend Application

A backend URL Shortener service built using Node.js, Express, and MongoDB Atlas.
This application converts long URLs into short, shareable links and redirects users to the original URL when accessed.

🚀 Features

Generate short URLs for long links

Redirect short URLs to original destinations

REST API–based architecture

MongoDB Atlas for persistent data storage

URL visit count tracking

Environment variable–based configuration

API tested using Thunder Client

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas

Utilities: shortid, dotenv

Tools: Git, GitHub, Thunder Client, VS Code

📂 Project Structure
URL-SHORTNER/
│── server.js
│── routes/
│   └── urlRoutes.js
│── models/
│   └── Url.js
│── config/
│   └── db.js
│── .env
│── .gitignore
│── package.json

🔑 API Endpoints
➤ Create Short URL

POST /api/shorten

Request Body:

{
  "originalUrl": "https://www.google.com"
}


Response:

{
  "shortUrl": "http://localhost:5000/api/abc123"
}

➤ Redirect Short URL

GET /api/:shortCode

Redirects the user to the original URL.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Bhavika-Ahuja/URL-SHORTNER.git
cd URL-SHORTNER

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

4️⃣ Run the server
npm run dev


Server will start at:

http://localhost:5000

📌 Learning Outcomes

Understanding REST API design

Backend routing with Express.js

MongoDB schema design and Atlas integration

Debugging real-world backend issues

Using Git and GitHub for version control

🔮 Future Improvements

Prevent duplicate URL entries

Add URL expiration feature

Add authentication

Build frontend using React

Add analytics dashboard
