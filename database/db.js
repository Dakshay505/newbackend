import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-wyad4q7-shard-00-00.2ynsxwz.mongodb.net:27017,ac-wyad4q7-shard-00-01.2ynsxwz.mongodb.net:27017,ac-wyad4q7-shard-00-02.2ynsxwz.mongodb.net:27017/?ssl=true&replicaSet=atlas-mblxjd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;