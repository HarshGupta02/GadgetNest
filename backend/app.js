const express = require("express")
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path : "backend/config/config.env"});

app.use(express.json({limit : '50mb'}));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : true, limit : '50mb'}));
app.use(fileUpload());

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.get("/", (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.send("API IS RUNNING");
})

app.use(`/api/v1`, product);
app.use(`/api/v1`, user);
app.use(`/api/v1`, order);
app.use(`/api/v1`, payment);

app.use(errorMiddleware);

module.exports = app;