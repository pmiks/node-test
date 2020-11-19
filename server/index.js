const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");

const app = express();

const PORT = process.env.SERVER_PORT || 5050;

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// try{
//     awit app.listen(PORT,()=>{})
//     console.log(`Server started at port ${PORT}`);
// }
// catch(error){
//     console.log(error)
//     throw error
// }

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server started at port ${PORT}`);
});
