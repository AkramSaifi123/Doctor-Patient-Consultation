import {db} from "../config/db.js";

export const findUserByEmail = (email, callback) => {

    const query = `
        SELECT * FROM users
        WHERE email = ?
    `;

    db.query(query, [email], callback);
};


export const findUserById = (id, callback) => {
    const query = `
        SELECT id, name, email, role
        FROM users
        WHERE id = ?
    `;
    db.query(query, [id], callback);
}


export const insertUSer = (userData, callback) => {

    const {
        name,
        email,
        password,
        role
    } = userData;

    const query = `
        INSERT INTO users
        (name, email, password, role)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [name, email, password, role],
        callback
    );
};