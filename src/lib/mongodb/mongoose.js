import mongoose from "mongoose";

let intialized = false;

export const connect = async() => {
    mongoose.set('strictQuery', true)

    if(intialized){
        console.log('MongoDB already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next auth clerk app',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected')
        intialized = true
    } catch (error) {
        console.log('MongoDB connection error : ' ,error)
    }
}