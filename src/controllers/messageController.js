import { db } from "../config/db.js";
import { createMessage, getMessagesModel } from "../models/messageModel.js";

export const sendMessage = (req, res) => {

    const consultationId = req.params.id;

    const senderId = req.user.id;

    const { message } = req.body;

    createMessage(
        consultationId,
        senderId,
        message, 
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(201).json({
                message: "Message sent successfully",
                messageId: result.insertId
            });
        })

   
};

export const getMessages = (req, res) => {

    const consultationId = req.params.id;

    getMessagesModel(consultationId, (err,result) => {
        if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(200).json(result);
    })

   
};