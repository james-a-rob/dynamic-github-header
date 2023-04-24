"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templates_1 = __importDefault(require("./templates"));
const app = (0, express_1.default)();
app.get("/image/:template", (req, res) => {
    const buffer = templates_1.default[req.params.template](req.query);
    res.set('Cache-Control', 'no-store');
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
});
exports.default = app;
