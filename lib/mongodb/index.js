// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// if (!clientPromise) {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
//   console.log("connected success");
// }

// export default clientPromise;

import mongoose from "mongoose";

async function dbConnect() {
  try {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
