const { Sequelize, DataTypes } = require("sequelize");

// =================================================================
const sequelize = new Sequelize("tasks_management", "root", "11M@chthailai11", {
  host: "localhost",
  dialect: "mysql",
});

// =================================================================
const Task = sequelize.define(
  "Task", // tên Model
  {
    // các column trong bảng
    name: {
      type: DataTypes.STRING, // loại dử liệu
      allowNull: false, // không cho null
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "tasks", // tên table trong database
    timestamps: true, // có đánh dấu mốc thời gian
  }
);

// =================================================================
const syncModel = async () => {
  await Task.sync({ force: true });
  console.log("The table for the Task model was just (re)created!");
};
// syncModel();

// =================================================================

const createTask = async () => {
  // c1
  const newTask = Task.build({ name: "Learning NodeJS", status: "OPEN" });
  await newTask.save();
  // c2
  const golangTask = await Task.create({
    name: "Learning Golang",
    status: "OPEN",
  });
};
// createTask();
// =================================================================

const getALLTask = async () => {
  const tasks = await Task.findAll();
  console.log("tasks list : ", JSON.stringify(tasks, null, 2));
};
// getALLTask();

const getTaskById = async (id) => {
  const task = await Task.findOne({
    where: {
      id: id,
    },
  });
  console.log("task by id : ", JSON.stringify(task, null, 2));
};
// getTaskById(1);

const updateTaskById = async (id, data) => {
  await Task.update(data, {
    where: {
      id: id,
    },
  });
};
updateTaskById(1, { status: "FINISH" });

const deleteById = async (id) => {
  await Task.destroy({
    where: {
      id: id,
    },
  });
};
deleteById(1);

// =================================================================
const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
checkConnect();
