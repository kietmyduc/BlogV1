import  mongoose from "mongoose";

const Connection = async () => {
    try{
    const url = 'mongodb://127.0.0.1/BlogV1'
   await mongoose.connect(url, {
       useNewUrlParser: true,
       useUnifiedTopology: true}
   );
        console.log('Connect database success')
    } catch (e) {
        console.log(e)
    }
}

export default Connection;
