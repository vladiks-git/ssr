import express from 'express';
import {renderToString} from "react-dom/server";
import {renderApp} from "./renderApp";
import {renderTemplate} from "./renderTemplate";

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
    const content = renderToString(renderApp());

    res.send(renderTemplate({
        cssPath: 'main.css',
        jsPath: 'main.js',
        content
    }))
})

app.listen(3000, () => {
    console.log('server start')
})
