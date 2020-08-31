import {graphqlHTTP} from "express-graphql";
import {app} from "../server/initializeServer";
import {types as AboutTypes, schema as AboutSchema, lookups as AboutLookups} from "./AboutSchema";
import {types as PostTypes, query as PostSchema, lookups as PostLookups} from "./PostSchema";
import {types as InstanceTypes, query as InstanceSchema, lookups as InstanceLookups, mutation as InstanceMutation} from "./InstanceSchema";
import {buildSchema} from "graphql";

const rootSchema = buildSchema(`
${AboutTypes}
${PostTypes}
${InstanceTypes}
 type Query {
     ${AboutSchema} 
     ${PostSchema}
     ${InstanceSchema}
 }
 type Mutation {
    ${InstanceMutation}
 }
`)

const rootLookups = {
    ...AboutLookups,
    ...PostLookups,
    ...InstanceLookups
}
const initiateGraphQl = () => {
    console.log('Initializing GraphQl')
    app.use('/graphql', graphqlHTTP({
        schema: rootSchema,
        rootValue: rootLookups,
        graphiql: true,
    }));
}

export default initiateGraphQl