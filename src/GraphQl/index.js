import {graphqlHTTP} from "express-graphql";
import {app} from "../server/initializeServer";
import {types as AboutTypes, schema as AboutSchema, lookups as AboutLookups} from "./AboutSchema";
import {schema as PostSchema, lookups as PostLookups} from "./PostSchema";
import {buildSchema} from "graphql";

const rootSchema = buildSchema(`${AboutTypes} type Query {${AboutSchema} ${PostSchema} }`)

const rootLookups = {
    ...AboutLookups,
    ...PostLookups
}
const initiateGraphQl = () => {
    app.use('/graphql', graphqlHTTP({
        schema: rootSchema,
        rootValue: rootLookups,
        graphiql: true,
    }));
}

export default initiateGraphQl