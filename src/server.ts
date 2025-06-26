import app from "./app.js";
import { client } from "./config/mongodb.js"; 

const port = 5000;
let server;

const bootstrap = async () => {
  await client.connect();
  console.log("connected to mongodb");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
