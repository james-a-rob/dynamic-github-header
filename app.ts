import express from 'express';
import templates from './templates';
import nocache from 'nocache';

const app = express();

app.use(nocache());

app.get("/image/:template.jpeg", (req, res) => {
    const buffer = templates[req.params.template](req.query);
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);

});

export default app;
