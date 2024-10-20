import mongoose, { mongo } from 'mongoose'

let initialized = false

//connection functionality
export const connect = async()=>{

    mongoose.strict('strictQuery', true);

    if(initialized){
        console.log('MongoDB already connected');
        return;
    }

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"next_auth_app",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MoongoDB connected!!!");
        initialized = true;

    }catch(error){
        console.log("mongoDB connection error", error);

    }
}