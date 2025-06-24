import app from "./app.js";
const port = 5000;
let server;
const bootstrap = () => {
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
