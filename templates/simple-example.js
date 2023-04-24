"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const example = (options) => {
    console.log(options);
    const canvas = (0, canvas_1.createCanvas)(400, 400);
    const context = canvas.getContext('2d');
    const randomColor = ['#000', '#FFD700', '#DC143C', '#E9967A', '#FF69B4', '#191970'][Math.floor(Math.random() * 6)];
    // set the background color to black
    context.fillStyle = (options === null || options === void 0 ? void 0 : options.color) || randomColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    // set the font size and color
    context.font = '36px "Font Family Name"';
    context.fillStyle = '#fff';
    // write the text on the canvas
    const text = 'Hello, World!';
    const textWidth = context.measureText(text).width;
    const x = (canvas.width - textWidth) / 2;
    const y = canvas.height / 2;
    context.fillText(text, x, y);
    const buffer = canvas.toBuffer('image/jpeg');
    return buffer;
};
exports.default = example;
