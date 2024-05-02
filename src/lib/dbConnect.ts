

import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export default async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;

    // Log successful connection message
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling in the API route
  }
}



// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
// 	throw new Error(
// 		'Please define the MONGODB_URI environment variable inside .env.local',
// 	)
// }

// let cached = global.mongoose

// if (!cached) {
// 	cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
// 	if (cached.conn) {
// 		return cached.conn
// 	}
// 	if (!cached.promise) {
// 		const opts = {
// 			bufferCommands: false,
// 		}
// 		cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
// 			console.log('Db connected')
// 			return mongoose
// 		})
// 	}
// 	try {
// 		cached.conn = await cached.promise
// 	} catch (e) {
// 		cached.promise = null
// 		throw e
// 	}

// 	return cached.conn
// }

// export default dbConnect