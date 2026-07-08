<<<<<<< HEAD
# TempVision Backend

Spring Boot 3.5 / Java 21 backend for the TempVision weather dashboard.
Module 1 (project setup + MySQL) and Module 2 (JWT authentication) from the project plan.

## What's included

- Spring Boot project skeleton (Maven, Java 21)
- MySQL datasource configuration (auto-creates the `tempvision` schema on first run)
- JWT authentication: register + login, stateless sessions, BCrypt password hashing
- Global exception handling with consistent JSON error responses
- CORS configured for a local React dev server (Vite: `:5173`, CRA: `:3000`)
- Swagger/OpenAPI UI at `/swagger-ui.html`
- Health check endpoint at `/api/health`

## Prerequisites

- Java 21 (JDK)
- Maven 3.9+ (or use the included `mvnw` if you add the wrapper)
- MySQL 8.x running locally (or accessible remotely)

## Setup

1. **Create/point to a MySQL instance.** The app will auto-create the `tempvision`
   database on first run (`createDatabaseIfNotExist=true`), but MySQL itself must be running.

2. **Update credentials** in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_mysql_password
   ```
   Also replace `jwt.secret` with your own generated Base64 secret before any real/production use.

3. **Run the app:**
   ```bash
   mvn spring-boot:run
   ```
   The API starts on `http://localhost:8080`.

4. **Verify it's alive:**
   ```bash
   curl http://localhost:8080/api/health
   ```

## Endpoints so far

| Method | Endpoint             | Auth required | Description          |
|--------|-----------------------|----------------|-----------------------|
| GET    | `/api/health`         | No             | Health check          |
| POST   | `/api/auth/register`  | No             | Register a new user   |
| POST   | `/api/auth/login`     | No             | Log in, get JWT pair  |

### Register example

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Jane Doe",
    "email": "[email protected]",
    "password": "SuperSecret123"
  }'
```

### Login example

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "[email protected]",
    "password": "SuperSecret123"
  }'
```

Both return an `accessToken` and `refreshToken`. Send the access token on
protected routes as:

```
Authorization: Bearer <accessToken>
```

## Project structure

```
backend/
├── src/main/java/com/tempvision/
│   ├── config/         # Security + CORS configuration
│   ├── controller/      # REST controllers (Auth, Health)
│   ├── dto/              # Request/response payloads
│   ├── entity/           # JPA entities (User, Role)
│   ├── repository/       # Spring Data JPA repositories
│   ├── security/         # JWT util + auth filter
│   ├── service/           # Business logic (AuthService, UserDetailsService)
│   ├── exception/         # Custom exceptions + global handler
│   └── TempVisionApplication.java
└── pom.xml
```

## Next modules (per the project plan)

3. Weather API integration (Open-Meteo / OpenWeather / OpenAQ)
4. React + Tailwind frontend
5. Dashboard, favorites, search history
6. Deployment (Railway/Render + Vercel/Netlify)
=======
# Temp-Vision
Temprature chack
>>>>>>> 15f2805fcc0a606722bb2780fe05c226d615cfb0
