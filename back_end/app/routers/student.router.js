const express = require("express");
const {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
} = require("../controllers/student.controller");
const routerStudent = express.Router();

// ResFul APIs

// READ ALL
routerStudent.get("/", getAllStudent);

// GET BY ID
routerStudent.get("/:id", getStudentById);

// CREATE
routerStudent.post("/", createStudent);

// UPDATE
routerStudent.put("/:id", updateStudent);

// DELETE
routerStudent.delete("/:id", deleteStudentById);

module.exports = routerStudent;
