import express from 'express'
import dotenv from 'dotenv'
import resolvers from '../resolvers/resolvers'
import schema from '../schemas/schema'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


import { graphqlHTTP } from 'express-graphql'
import postRouter from '../routes/posts'

const app = express();

dotenv.config();

app.use(bodyParser.json());

const port = process.env.NODE_PORT;

app.get('/', (req, res) => {
    res.send("Up and running with graphql crash course");
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.use('/posts', postRouter);

// Connect to DB
mongoose.connect(process.env.MONGO_DB_CONNECTION_LOCAL,
{ useNewUrlParser: true },
    () => {
        console.log('CONNECTED TO DB ')
    })

app.listen(port, () => console.log(`Running at ${port}`));