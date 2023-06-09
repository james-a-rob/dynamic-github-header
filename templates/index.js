"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_example_1 = __importDefault(require("./simple-example"));
const latest_follower_1 = __importDefault(require("./latest-follower"));
const templates = {
    'simple-example': simple_example_1.default,
    'latest-follower': latest_follower_1.default
};
exports.default = templates;
