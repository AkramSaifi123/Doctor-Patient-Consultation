
import { createDoctorModel, getDoctorByIdModel, getDoctors } from "../models/doctorModel.js";

export const getAllDoctors = (req, res) => {


    getDoctors((err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        res.status(200).json(result);
    })


};

export const getDoctorById = (req, res) => {

    const { id } = req.params;


    getDoctorByIdModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).send("Doctor not found");
        }

        res.status(200).json(result[0]);
    })


};



export const createDoctor = async (req, res) => {
    try {
        const { user_id, specialization, experience, fee } = req.body;

        createDoctorModel({
            user_id,
            specialization,
            experience
        }, (err, result) => {
            if (err) {
                return res.send(err.message)
            }
            res.status(201).json({
                message: "Doctor added successfully",
                doctorId: result.insertId
            });
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};