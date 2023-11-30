const { Student } = require("../model");

const getALl = async () => {
  const studentList = await Student.findAll();
  if (studentList) {
    return studentList;
  } else {
    return "Not Found!";
  }
};

const getById = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  return student;
};

const create = async (fullName, age, numberClass) => {
  const newStudent = await Student.create({ fullName, age, numberClass });
  return newStudent;
};

const update = async (id, fullName, age, numberClass) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    student.fullName = fullName;
    student.age = age;
    student.numberClass = numberClass;
    const studentUpdated = await student.save();
    return studentUpdated;
  } else {
    return null;
  }
};

const deleteById = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    await Student.destroy({
      where: {
        id,
      },
    });
    return student;
  } else {
    return false;
  }
};

module.exports = {
  getALl,
  getById,
  create,
  update,
  deleteById,
};
