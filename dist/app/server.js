import app from "../../src/app/app.js";
const port = 5000;
let server;
const bootstrap = async () => {
    await client.connect();
    console.log("connected to mongodb");
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
