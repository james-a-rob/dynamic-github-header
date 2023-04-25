"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templates_1 = __importDefault(require("./templates"));
const nocache_1 = __importDefault(require("nocache"));
const app = (0, express_1.default)();
app.use((0, nocache_1.default)());
app.get("/image/:template.jpeg", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const buffer = yield templates_1.default[req.params.template](req.query);
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
}));
exports.default = app;
