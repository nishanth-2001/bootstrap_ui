const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(4000, function serverCallback() {
    console.log("server started on port 4000");
});