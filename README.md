# DisasterResQ - Efficient Disaster Reporting & Relief Management

## 📌 Overview
**DisasterResQ** is a full-stack disaster management web application designed to streamline disaster reporting, volunteer coordination, and relief efforts. Users can report disasters with location details and images, view reported incidents, register as volunteers, and provide assistance through financial donations or on-ground support. Built with modern web technologies, DisasterResQ ensures secure authentication, seamless user experience, and efficient disaster response management.


## 🚀 Features
- **Disaster Reporting** 📍: Users can report disasters by providing location details, disaster type and uploading images.
- **View Reported Disasters** 🔍: Access a list of all reported disasters with relevant details.
- **Volunteer Registration** 🏥: Individuals can sign up to assist in disaster relief efforts.
- **View Registered Volunteers** 🏅: Users can browse the list of available volunteers.
- **Physical Assistance** 🗺️: Users can navigate to affected locations via Google Maps.
- **Help via Financial Support** 💰: Securely contribute to disaster relief efforts through Stripe integration.
- **Image Upload Support**: Users can attach images while reporting disasters
- **Real-time Updates** 🔔: Stay informed about disaster occurrences and volunteer availability.
- **Secure Authentication** 🔐: User authentication for safety and data integrity.

## 🛠️ Tech Stack
### **Frontend** (Client-Side)

- React
- React Router
- Clerk (for authentication)
- Tailwind CSS

### **Backend** (Server-Side)
- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary (for media storage)
- Multer (for file uploads)
- Stripe (for financial donations)


## Setup & Installation:

### **1️⃣ Clone the Repository**
```bash
# Clone the repository
git clone https://github.com/Shahid8389/DisasterResQ.git

# Navigate to the project directory
cd DisasterResQ
```

### 2️⃣ Backend Setup
1. Navigate to the `server` folder:
```bash
cd server
```
2. Install dependencies:
```bash
npm install
```
3. Set Up Backend Environment Variables:
```bash
MONGODB_URI = "your_mongodb_uri"

CLOUDINARY_NAME = "your_cloudinary_cloud_name"
CLOUDINARY_API_KEY = "your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY = "your_cloudinary_secret_key"

STRIPE_SECRET_KEY="your_stripe_secret_key"

```
4. Start the backend server with Node.js:
```bash
# Make sure your Node.js version is 18.11.0 or higher.
node --watch server.js
```

Or, you can also use **Nodemon** for Automatic Server Restarts.

### 3️⃣ Frontend Setup
1. Navigate to the `client` folder

2. Install dependencies:
```bash
npm install
```
3. Set Up Frontend Environment Variables:
```bash
VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
VITE_BACKEND_URL = "http://localhost:3000"

```
4. Start the React frontend:
```bash
npm run dev
```
5. Open your browser and visit:
```bash
http://localhost:5173
```

---

### 📝 Contributing
Contributions are welcome! Follow these steps:

1. Fork or Clone the repository

2. Create a new branch:
```bash
git checkout -b feature-branch
```
3. Make your changes and commit:
```bash
git commit -m "Describe your changes"
```
3. Push to your branch:
```bash
git push origin feature-branch
```
4. Open a Pull Request