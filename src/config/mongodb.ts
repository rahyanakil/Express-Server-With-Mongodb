import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://rahyanakil89:todospasshero@cluster0.hvppqd2.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
