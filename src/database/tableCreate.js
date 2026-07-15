import { db } from "../config/db.js";

export const createTables = () => {

    // Users Table
    db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM('patient', 'doctor') NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.log("Users table error:", err);
        } else {
            console.log("Users table created");
        }
    });

    // Doctors Table
    db.query(`
        CREATE TABLE IF NOT EXISTS doctors (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            specialization VARCHAR(100) NOT NULL,
            experience INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
        )
    `, (err) => {
        if (err) {
            console.log("Doctors table error:", err);
        } else {
            console.log("Doctors table created");
        }
    });

    // Consultations Table
    db.query(`
        CREATE TABLE IF NOT EXISTS consultations (
            id INT AUTO_INCREMENT PRIMARY KEY,
            patient_id INT NOT NULL,
            doctor_id INT NOT NULL,
            status ENUM('pending', 'completed') DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (patient_id) REFERENCES users(id)
                ON DELETE CASCADE,

            FOREIGN KEY (doctor_id) REFERENCES doctors(id)
                ON DELETE CASCADE
        )
    `, (err) => {
        if (err) {
            console.log("Consultations table error:", err);
        } else {
            console.log("Consultations table created");
        }
    });

    // Messages Table
    db.query(`
        CREATE TABLE IF NOT EXISTS messages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            consultation_id INT NOT NULL,
            sender_id INT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (consultation_id) REFERENCES consultations(id)
                ON DELETE CASCADE,

            FOREIGN KEY (sender_id) REFERENCES users(id)
                ON DELETE CASCADE
        )
    `, (err) => {
        if (err) {
            console.log("Messages table error:", err);
        } else {
            console.log("Messages table created");
        }
    });
};