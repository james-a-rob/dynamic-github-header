"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("testing simple example", () => {
    test("works when passing correct template name", (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/image/simple-example.jpeg?color=black')
            .expect('Content-Type', 'image/jpeg')
            .expect('Content-Length', '5312')
            .expect(200)
            .end(function (err, res) {
            if (err)
                throw err;
            done();
        });
    });
});
