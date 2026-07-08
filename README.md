# 🌤️ Temp-Vision

<div align="center">

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-green?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge)

### A Modern Full Stack Weather Dashboard

Real-time weather forecasts, authentication, favorite cities, weather history, air quality, interactive maps, and analytics.

</div>

---

# 📌 Features

### 🌦 Weather
- Current Weather
- 7-Day Forecast
- Hourly Forecast
- Weather History
- Favorite Cities
- Air Quality Index
- Weather Maps
- Temperature Analytics

### 🔐 Authentication
- JWT Authentication
- User Registration
- Secure Login
- Protected Routes
- Password Encryption

### 👤 User Features
- User Profile
- Dashboard
- Settings
- Theme Toggle (Dark/Light)

### 📊 Dashboard
- Analytics Charts
- Interactive Cards
- Responsive Design
- Modern UI

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Icons

## Backend

- Java 21
- Spring Boot 3.5
- Spring Security
- Spring Data JPA
- JWT
- MySQL
- Maven

---

# 📂 Project Structure

```
Temp-Vision/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/dev-mohit-goswami/Temp-Vision.git
```

```bash
cd Temp-Vision
```

---

# ⚙ Backend Setup

```bash
cd backend
```

### Configure Database

Update:

```
src/main/resources/application.properties
```

Example

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tempvision
spring.datasource.username=root
spring.datasource.password=your_password
```

Run Backend

```bash
mvn clean install
```

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

# 💻 Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run project

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔒 Authentication

- Register
- Login
- JWT Token
- Secure APIs
- Protected Routes

---

# 📸 Screenshots

```
Add screenshots here
```

Example

```
Home Page

Dashboard

Login

Forecast

Profile

Weather Map
```

---

# 📡 REST APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login |
| GET | /api/weather | Current Weather |
| GET | /api/forecast | Forecast |
| GET | /api/history | Weather History |

---

# 🌍 Future Improvements

- Email Verification
- Password Reset
- Push Notifications
- PWA Support
- Docker Deployment
- Kubernetes
- Redis Cache
- CI/CD Pipeline

---

# 🤝 Contributing

Contributions are welcome!

1. Fork Repository
2. Create Feature Branch
3. Commit Changes
4. Push Branch
5. Create Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

### Mohit Goswami

Full Stack Java Developer

- Java
- Spring Boot
- React
- MySQL
- REST APIs
- JWT Authentication

GitHub

https://github.com/dev-mohit-goswami

---

<div align="center">

⭐ Star this repository if you found it helpful!

Made with ❤️ by Mohit Goswami

</div>
