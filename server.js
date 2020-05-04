const express = require('express')
const expressGraphQL = require('express-graphql')
const{
  GraphQLSChema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const app = express()

const schema = new GraphQLSChema({
  query: new GraphQLObjectType({
    name: 'Hello World',
    fields: ()=> ({
      message: { 
        type: GraphQLString,
        resolve: () => ' Hello World' 
    }
    })
  })
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(5000.,() => console.log('Server Running'))