import { MongoClient } from "mongodb";
import NSError from "../handlers/error"

let mongoDbInstance = null;

const mongoClient = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: { username: process.env.MONGO_USER_NAME, password: process.env.MONGO_PASSWORD },
});

mongoClient
  .connect()
  .then(() => {
    console.log("MongoClient connected");
    mongoDbInstance = mongoClient.db(process.env.MONGO_DB_NAME);
  })
  .catch((e) => {
    console.log("Mongo connection error: " + e);
  });

export const mongo = () => {
  if (!mongoDbInstance) throw new NSError(500, "Internal Server Error", "Database not initialized");
  return mongoDbInstance
};
