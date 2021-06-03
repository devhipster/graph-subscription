const express = require('express'); // eslint-disable-line
const app = express();
const {ApolloServer , gql} = require('apollo-server-express'); // eslint-disable-lineco
const{typeDefs,resolver} =require('./schema');

const server  = new ApolloServer({typeDefs,resolver});
server.applyMiddleware({app});


const data = [
  {title:'Home child',author:'Austin martin'},
  {title:'No kids at home',author:'Tahoe'}
]
app.listen(5000,()=>{
  console.log('listening on port 5000');
})
