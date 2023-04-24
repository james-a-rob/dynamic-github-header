import express from 'express';
import templates from './templates';

const app = express();

app.get("/image/:template", (req, res) => {

    const buffer = templates[req.params.template]();
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);

});

export default app;
