import mongoose, { ConnectOptions } from "mongoose";

interface ExtendedConnectOptions extends ConnectOptions {
  useNewUrlParser?: boolean;
}

const dbConnect = async () => {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) return;
  console.log("Connected to DB");
  return mongoose.connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  } as ExtendedConnectOptions);
};

export default dbConnect;
