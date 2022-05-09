const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
	optionSuccessStatus: 200,
};

//connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to Bad Bank API" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
