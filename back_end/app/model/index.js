const { DB, HOST, PASSWORD, USER, dialect } = require("../../config/db.config");
const { Sequelize } = require("sequelize");
const { createModelStudent } = require("./student.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const Student = createModelStudent(sequelize);

module.exports = {
  sequelize,
  Student,
};
