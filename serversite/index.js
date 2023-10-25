const express = require('express')
const app = express();
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// zEbgLfVYZ9xmmmTN

app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://shimulzahan:zEbgLfVYZ9xmmmTN@shimulclaster1.85diumq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db("BlogsApp");
        const createsBlogs = database.collection("blogs");

        // app.get('/posts', async (req, res) => {
        //     // res.send('Hello server');
        //     const cursor = createsBlogs.find();
        //     const blogs = await cursor.toArray();
        //     res.send(blogs)
        // })

        // app.get('/posts/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const post = { _id: new ObjectId(id) };
        //     const result = await createsBlogs.findOne(post);
        //     res.send(result)
        // })

        // app.post('/posts', async (req, res) => {
        //     const post = req.body;
        //     console.log(post)
        //     const result = await createsBlogs.insertOne(post);
        //     res.send(result);
        // })

        // app.put('/posts/:id', async (req, res) => {
        //     const id = req.params.id;
        //     // console.log(id);
        //     const post = req.body;
        //     // console.log(post)
        //     const filter = { _id: new ObjectId(id) };
        //     const options = { upsert: true };
        //     const updatePost = {
        //         $set: {
        //             name: post.name,
        //             email: post.email,
        //             blog: post.blog,
        //         },
        //     };
        //     const result = await createsBlogs.updateOne(filter, updatePost, options);
        //     res.send(result);
        // })

        // app.delete('/posts/:id', async (req, res) => {
        //     const id = req.params.id;
        //     // console.log(id)
        //     const query = { _id: new ObjectId(id) };
        //     const result = await createsBlogs.deleteOne(query);
        //     res.send(result)
        // })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(5000, () => {
    console.log('Server running at localhost: 5000');
})