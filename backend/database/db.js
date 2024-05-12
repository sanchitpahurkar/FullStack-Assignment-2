import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://pahurkarsm:5mba3555b8@mern-cluster.hsbzk3a.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;