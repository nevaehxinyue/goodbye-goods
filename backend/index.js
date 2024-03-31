const express = require("express");
const helmet = require("helmet");
const config = require("config");
const compression = require("compression");
const app = express();

const categories = require("./routes/categories");
const listings = require("./routes/listings");
const listing = require("./routes/listing");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const messages = require("./routes/messages");
const expoPushToken = require("./routes/expoPushToken");


app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/categories", categories);
app.use("/api/listings", listings);
app.use("/api/listing", listing);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushToken", expoPushToken);
app.use("/api/messages", messages);


const port = process.env.PORT || config.get('port');
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
})