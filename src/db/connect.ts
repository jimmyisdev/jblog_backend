import mongoose from "mongoose";
const connectDB = (url?: string) => {
    if (!url) {
        throw Error()
    }

    return mongoose.connect(url);
};
export default connectDB;