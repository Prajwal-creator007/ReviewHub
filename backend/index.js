const express=require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app=express();
const port=8000;
app.use(bodyParser.json());
app.use(cors());

const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://0.0.0.0:27017/reviewhub";
const uri2 = "mongodb://0.0.0.0:27017/reviewhub_backup";
const client = new MongoClient(uri);
const client_2 = new MongoClient(uri2);

function formatTimestamp(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Kolkata",
    };
  
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

async function connectToDatabase() {
    try {
      // Connect to the MongoDB server
      await client.connect();
  
      console.log('Connected to the database reviewhub.');
      // Do your database operations here...
  
    } catch (error) {
      console.error('Unable to connect to the database reviewhub:', error);
    }

    try{
        await client_2.connect();
  
      console.log('Connected to the backup database.');
    } catch (error) {
        console.error('Unable to connect to backup database:', error);
      }
}
connectToDatabase()
// Create a new MongoClient

const database=client.db("reviewhub");
const db2 = client.db("reviewhub_backup");
const reviews=database.collection("reviews");
const comments=database.collection("comments");
const reviews_2=db2.collection("reviews");
const comments_2=db2.collection("comments");

app.get('/reviews', async (req, res) => {
    const type = req.query.type;
    const query = { "type": type };

    try {
        const reviewResult = await reviews.find(query).toArray();
        const reviewsWithTimestamp = reviewResult.map((review) => ({
            ...review,
            timestamp: formatTimestamp(review.timestamp),
        }));
        res.send({ "reviews": reviewsWithTimestamp });
        //res.send({ "reviews": reviewResult });
    } catch (error) {
        console.error('Error reading from primary database. Attempting backup retrieval.', error);

        try {
            const reviewResultBackup = await reviews_2.find(query).toArray();
            const reviewsWithTimestampBackup = reviewResultBackup.map((review) => ({
                ...review,
                timestamp: formatTimestamp(review.timestamp),
            }));
            res.send({ "reviews": reviewsWithTimestampBackup });
            //res.send({ "reviews": reviewResultBackup });
        } catch (backupError) {
            console.error('Error retrieving from backup database.', backupError);
            res.status(500).send({ status: "Error" });
        }
    }
});

// app.get('/', async(req, res)=>{
//     const type=req.query.type;
//     const query={"type": type};
//     const review_result=reviews.find(query);
//     const result=[];
//     await review_result.forEach((item)=>{
//         result.push(item);
//     });
//     res.send({"reviews": result});
// })
// app.post('/', async(req, res)=>{
//     const doc={...req.body};
//     const result=await reviews.insertOne(doc);
//     res.send({
//         status: "OK"
//     })
// })

app.get('/comments', async (req, res) => {
    const type = req.query.type;
    const query = { "type": type };

    try {
        const commentsResult = await comments.find(query).toArray();
        const commentsWithTimestamp = commentsResult.map((comment) => ({
            ...comment,
            timestamp: formatTimestamp(comment.timestamp),
        }));
        res.send({ "comments": commentsWithTimestamp });
       // res.send({ "comments": commentsResult });
    } catch (error) {
        console.error('Error reading from primary database. Attempting backup retrieval.', error);

        try {
            const commentsResultBackup = await comments_2.find(query).toArray();
            const commentsWithTimestampBackup = commentsResultBackup.map((comment) => ({
                ...comment,
                timestamp: formatTimestamp(comment.timestamp),
            }));
            res.send({ "comments": commentsWithTimestampBackup });
            //res.send({ "comments": commentsResultBackup });
        } catch (backupError) {
            console.error('Error retrieving from backup database.', backupError);
            res.status(500).send({ status: "Error" });
        }
    }
});

app.post('/comments', async (req, res) => {
    const doc = { ...req.body, timestamp: new Date() };

    try {
        const result = await comments.insertOne(doc);
        await comments_2.insertOne(doc);
        res.send({
            status: "OK",
            backupStatus: "Backup OK",
            timestamp: doc.timestamp
        });
    } catch (error) {
        console.error('Error inserting into databases.', error);
        res.status(500).send({ status: "Error" });
    }
});





app.listen(port, ()=>{
    console.log("app listening at port 8000");
})

