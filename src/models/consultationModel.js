import {db} from "../config/db.js";

export const createConsultationModel = (
    patientId,
    doctorId,
    callback
) => {

    const query = `
        INSERT INTO consultations
        (patient_id, doctor_id)
        VALUES (?, ?)
    `;

    db.query(
        query,
        [patientId, doctorId],
        callback
    );
};

export const getAllConsultationsModel = (
    callback
) => {

    const query = `
        SELECT *
        FROM consultations
    `;

    db.query(query, callback);
};

export const getConsultationByIdModel = (
    id,
    callback
) => {

    const query = `
        SELECT *
        FROM consultations
        WHERE id = ?
    `;

    db.query(query, [id], callback);
};

export const updateConsultationStatusModel = (
    id,
    status,
    callback
) => {

    const query = `
        UPDATE consultations
        SET status = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [status, id],
        callback
    );
};