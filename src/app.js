const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./db/mongoose");

// to parse automatically

app.use(express.json());

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Done");
});
