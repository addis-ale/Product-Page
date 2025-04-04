"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use((0, express_1.default)());
app.get("/", function (req, res) {
    res.send("Hello world");
});
app.listen(8000, function () { return console.log("app is working"); });
