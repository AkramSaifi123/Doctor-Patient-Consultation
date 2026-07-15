import {db} from "../config/db.js";

export const createMessage = (
    consultationId,
    senderId,
    message,
    callback
) => {

    const query = `
        INSERT INTO messages
        (
            consultation_id,
            sender_id,
            message
        )
        VALUES (?, ?, ?)
    `;

    db.query(
        query,
        [
            consultationId,
            senderId,
            message
        ],
        callback
    );
};

export const getMessagesModel = (
    consultationId,
    callback
) => {

    const query = `
        SELECT
            messages.id,
            users.name,
            messages.message,
            messages.created_at
        FROM messages

        JOIN users
        ON messages.sender_id = users.id

        WHERE consultation_id = ?

        ORDER BY messages.created_at ASC
    `;

    db.query(
        query,
        [consultationId],
        callback
    );
};