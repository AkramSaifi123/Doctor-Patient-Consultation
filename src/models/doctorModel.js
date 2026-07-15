import {db} from "../config/db.js";

export const getDoctors = (callback) => {

    const query = `
        SELECT
            doctors.id,
            users.name,
            users.email,
            doctors.specialization,
            doctors.experience
        FROM doctors
        JOIN users
        ON doctors.user_id = users.id
    `;

    db.query(query, callback);
};

export const getDoctorByIdModel = (id, callback) => {

    const query = `
        SELECT
            doctors.id,
            users.name,
            users.email,
            doctors.specialization,
            doctors.experience
        FROM doctors
        JOIN users
        ON doctors.user_id = users.id
        WHERE doctors.id = ?
    `;

    db.query(query, [id], callback);
};

export const createDoctorModel = (doctorData, callback) => {

    const {
        user_id,
        specialization,
        experience
    } = doctorData;

    const query = `
        INSERT INTO doctors
        (user_id, specialization, experience)
        VALUES (?, ?, ?)
    `;

    db.query(
        query,
        [
            user_id,
            specialization,
            experience
        ],
        callback
    );
};