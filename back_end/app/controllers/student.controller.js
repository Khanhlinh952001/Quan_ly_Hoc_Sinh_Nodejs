const studentServices = require("../services/student.services");

const getAllStudent = async (req, res) => {
  const studentList = await studentServices.getALl();
  res.status(200).send(studentList);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await studentServices.getById(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("not found");
  }
};
const createStudent = async (req, res) => {
  const { fullName, age, numberClass } = req.body;
  const newStudent = await studentServices.create(fullName, age, numberClass);
  res.status(201).send(newStudent);
};
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  const student = await studentServices.update(id, fullName, age, numberClass);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("not found!");
  }
};
const deleteStudentById = async (req, res) => {
  const { id } = req.params;

  const studentDelete = await studentServices.deleteById(id);

  if (studentDelete) {
    res.status(200).send(studentDelete);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
};
