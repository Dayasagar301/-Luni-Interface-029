const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const { dbconnect } = require("./config/config,js");

const app = express();
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.listen(3000, async (req, res) => {
    try {
        await dbconnect;
        console.log("Server is running on port 3000");

    } catch (error) {
        console.log(error);
    }

});