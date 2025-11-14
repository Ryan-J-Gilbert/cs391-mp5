import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;


if (!MONGO_URI) {
    throw new Error("NO API key");
}


const DB_NAME = "urls";
export const URL_COLLECTION = "url-collection"

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db>{
    if(!client){
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);

}
export default async function getCollection(collectionName: string): Promise<Collection>{
    console.log(MONGO_URI.substring(0,5));
    if (!db){
        db = await connect();
    }
    return db.collection(collectionName);
}