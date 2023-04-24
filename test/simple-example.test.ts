import request from 'supertest';
import app from '../app';

describe("testing simple example", () => {
    test("works when passing correct template name", (done) => {
        request(app)
            .get('/image/simple-example')
            .expect('Content-Type', 'image/jpeg')
            .expect('Content-Length', '5312')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });

    });
});

