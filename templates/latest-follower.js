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
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const width = 1500;
const height = 500;
const profileImageWidth = 120;
const profileImageHeight = 120;
const latestFollower = (options) => __awaiter(void 0, void 0, void 0, function* () {
    (0, canvas_1.registerFont)('fonts/Anton/Anton-Regular.ttf', { family: 'Anton Regular' });
    const canvas = (0, canvas_1.createCanvas)(width, height);
    const ctx = canvas.getContext('2d');
    const partyImage = yield (0, canvas_1.loadImage)('images/party.png');
    const partyImageFlipped = yield (0, canvas_1.loadImage)('images/party-flipped.png');
    const image1 = yield (0, canvas_1.loadImage)('https://avatars.githubusercontent.com/u/59564497?v=4');
    ctx.fillStyle = (options === null || options === void 0 ? void 0 : options.background) || "#8460d7";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = (options === null || options === void 0 ? void 0 : options.textColor) || "#f7f7f7";
    ctx.textAlign = 'center';
    ctx.font = 'light 80px "Anton Regular"';
    ctx.fillText("Hi I'm James", width / 2, 160);
    ctx.font = 'thin 40px "Anton Regular"';
    ctx.fillText(`Thanks to my latest follower bob`, width / 2, 240);
    ctx.font = '25px "Anton Regular"';
    ctx.fillStyle = "#d1eeff";
    ctx.drawImage(partyImageFlipped, (width / 2) - 220, 290, 120, 120);
    ctx.drawImage(partyImage, (width / 2) + 100, 290, 120, 120);
    ctx.beginPath();
    ctx.arc((width / 2), 350, 60, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(image1, (width / 2) - (profileImageWidth / 2), 290, 120, 120);
    console.log(image1);
    const buffer = canvas.toBuffer('image/jpeg');
    return buffer;
});
exports.default = latestFollower;
