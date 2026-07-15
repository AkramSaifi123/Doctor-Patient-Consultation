

# Doctor Patient Consultation API

## Overview

Doctor Patient Consultation API is a backend application built using Node.js, Express.js, and MySQL. It allows users to register as doctors or patients, authenticate using JWT, create consultations, exchange messages, and manage doctor information.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* JWT Authentication
* bcrypt
* Postman

---

## Features

* User registration and login
* JWT-based authentication
* Doctor management
* Consultation management
* Assign doctors to patients
* Real-time-style messaging system
* Protected routes

---

## Project Setup

### Clone the repository

```bash
git clone https://github.com/AkramSaifi123/Doctor-Patient-Consultation.git
cd Doctor-Patient-Consultation
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=doctor_appointment_db

JWT_SECRET=your_secret_key
```

---

## Start the server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server:

```text
http://localhost:3000
```

---

## API Endpoints

### Authentication

#### Register User

**POST**

```text
http://localhost:3000/register
```

Request Body:

```json
{
  "name": "user1",
  "email": "user1@example.com",
  "password": "12345678",
  "role": "doctor"
}
```

---

#### Login User

**POST**

```text
http://localhost:3000/login
```

Request Body:

```json
{
  "email": "user1@example.com",
  "password": "12345678"
}
```

---

#### Get Profile

**GET**

```text
http://localhost:3000/profile
```

Authorization:

```text
Bearer Token: {{token}}
```

---

## Doctor APIs

### Get All Doctors

**GET**

```text
http://localhost:3000/doctor
```

---

### Get Doctor By ID

**GET**

```text
http://localhost:3000/doctor/:id
```

Example:

```text
http://localhost:3000/doctor/1
```

---

### Add Doctor Information

**POST**

```text
http://localhost:3000/doctor
```

Request Body:

```json
{
  "user_id": 1,
  "specialization": "Cardiologist",
  "experience": 5
}
```

---

## Consultation APIs

### Get All Consultations

**GET**

```text
http://localhost:3000/consultations
```

---

### Get Consultation By ID

**GET**

```text
http://localhost:3000/consultations/:id
```

Example:

```text
http://localhost:3000/consultations/1
```

---

### Assign Doctor to Patient

**POST**

```text
http://localhost:3000/consultations
```

Request Body:

```json
{
  "patientId": 1,
  "doctorId": 1
}
```

---

## Message APIs

### Get Messages

**GET**

```text
http://localhost:3000/consultations/:id/messages
```

Example:

```text
http://localhost:3000/consultations/1/messages
```

---

### Send Message

**POST**

```text
http://localhost:3000/consultations/:id/messages
```

Request Body:

```json
{
  "message": "Hello doctor"
}
```

---

## Authentication

Protected routes require a JWT token.

Example:

```text
Authorization: Bearer <your_token>
```

---

## API Testing

The complete API collection is available in Postman format.

Import the Postman collection file into Postman and update the `token` variable after logging in.

---

## Author

Akram

BCA Graduate | MERN Stack Developer
