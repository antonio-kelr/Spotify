import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://antonio:antonio3322@cluster1.zvhjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const clinet = new MongoClient(URL);

export  const db = clinet.db("apiesportfy");
// const artistCollection = await db.collection("artists").find({}).toArray();
// console.log("bando bdmongo", artistCollection);
 