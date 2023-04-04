import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();;
const storage = new GridFsStorage({
    url: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-wyad4q7-shard-00-00.2ynsxwz.mongodb.net:27017,ac-wyad4q7-shard-00-01.2ynsxwz.mongodb.net:27017,ac-wyad4q7-shard-00-02.2ynsxwz.mongodb.net:27017/?ssl=true&replicaSet=atlas-mblxjd-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});
console.log({storage});
export default multer({storage}); 