import {db} from "../config/db.js";
import { createConsultationModel, getAllConsultationsModel, getConsultationByIdModel, updateConsultationStatusModel } from "../models/consultationModel.js";

export const createConsultation = (req, res) => {

    const patientId = req.user.id;

    const { doctorId } = req.body;


    createConsultationModel(patientId, doctorId, (err, result) => {
         if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(201).json({
                message: "Consultation created",
                consultationId: result.insertId
            });
    })

}

export const getAllConsultations = (req, res) => {


    getAllConsultationsModel((err, result) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        res.status(200).json(result);
    })

   
};

export const getConsultationById = (req, res) => {

    const { id } = req.params;

    getConsultationByIdModel(id, (err, result) => {
         if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Consultation not found"
            });
        }

        res.status(200).json(result[0]);
    })

};

export const updateConsultationStatus = (
    req,
    res
) => {

    const { id } = req.params;

    const { status } = req.body;

    updateConsultationStatusModel(id, status, (err) => {
        if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(200).json({
                message: "Status updated"
            });
    })

 
};