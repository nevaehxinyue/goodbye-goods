const express = require("express");
const helmet = require("helmet");
const config = require("config");
const compression = require("compression");
const { func } = require("joi");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

const port = process.env.PORT || config.get('port');
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
})