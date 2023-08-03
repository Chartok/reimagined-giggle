import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, options);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message);
    }
}

connectToMongoDB();

export default mongoose;
