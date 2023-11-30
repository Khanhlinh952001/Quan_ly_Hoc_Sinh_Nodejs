const express = require("express");
const router = express.Router();
const routerStudent = require("./student.router");
router.use("/students", routerStudent);
module.exports = router;
