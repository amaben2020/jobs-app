import mongoose from "mongoose";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// export default function connectDB() {
//   if (!process.env.MONGODB_URI) {
//     throw new Error("Add Mongo URI to .env.local");
//   }

//   try {
//     mongoose.connect(process.env.MONGODB_URI);

//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("Connected Successfully ✅");
//     });

//     connection.on("error", () => {
//       console.error("Something went wrong ❌");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cached: any = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI!, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
