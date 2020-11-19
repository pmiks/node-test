const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const { operatorData } = require("./tempdata");

const MOperatorType = new GraphQLObjectType({
  name: "operator",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nameInternational: { type: GraphQLString },
    color: { type: GraphQLString },
    commission: { type: GraphQLString },
    logoPath: { type: GraphQLString },
  }),
});

const PhoneType = new GraphQLObjectType({
  name: "phone",
  fields: () => ({
    number: { type: GraphQLString },
    operator: { type: GraphQLString },
    registrationDate: { type: GraphQLString },
  }),
});

const PaymentType = new GraphQLObjectType({
  name: "payment",
  fields: () => ({
    number: { type: GraphQLString },
    date: { type: GraphQLString },
    sum: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    operator: {
      type: MOperatorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return operatorData.find((mobOper) => mobOper.id == args.id);
      },
    },
    phone: {
      type: PhoneType,
      args: { phonenumber: { type: GraphQLString } },
      resolve(parent, args) {},
    },

    payment: {
      type: PaymentType,
      args: { phonenumber: { type: GraphQLString } },
      resolve(parent, args) {},
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
