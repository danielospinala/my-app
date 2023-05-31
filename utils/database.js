// import mongoose from 'mongoose'

// let isConnected = false; 

// export const connectToDB = async ()=>{
//     mongoose.set('strictQuery', true);

//     if(isConnected){
//         console.log('MongoDB  is already connected')
//         return;
//     }
//     try{
//         const db = await mongoose.connect(process.env.MONGODB_URI, {
//             dbName:"roommateUsers",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             // useFindAndModify: false,
//             // useCreateIndex: true,
//           });
//           isConnected = true;
//           console.log('MongoDB is connected')

//     }catch(error){
//         console.log(error)
//     }
// }