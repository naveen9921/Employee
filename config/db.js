
import dotenv from 'dotenv';
dotenv.config();
import mongodb from 'mongodb';


const { MongoClient } = mongodb;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.e0nnfpd.mongodb.net/?retryWrites=true&w=majority`;
// const url = `mongodb://localhost:27017`; 

const connect = async () => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(`${process.env.DB_NAME}`);
        console.log(`Connected to ${process.env.DB_CLUSTER}`);
        console.log(`Connected to ${process.env.DB_NAME}`);
        return db;
    } catch (error) {
        console.error(error);
        client.close();
    }
}

const db = await connect();

export default db;


