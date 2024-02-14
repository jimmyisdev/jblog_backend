import express, { Application } from "express";
import cors from 'cors';
import connectDB from "./db/connect";
import { json } from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";
import { router as useArticle } from "./routes/article";
import { errorHandler } from "./utils/error";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
const port = process.env.PORT || 4000;
const app: Application = express();
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

app.use(
    cors<cors.CorsRequest>({
        origin: ["http://localhost:3000"],
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "DELETE", "PUT", "OPTION"],
        credentials: true,
    }),
);


app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body);
    next();
});
app.use("/api/v1/articles", useArticle);
app.use(errorHandler);

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app, path: '/graphql' });


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();



