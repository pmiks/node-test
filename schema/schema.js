const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
} = graphql;

const { operatorData, phoneData, paymentData } = require("./tempdata");

const MOperatorType = new GraphQLObjectType({
  name: "operator",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nameInternational: { type: GraphQLString },
    color: { type: GraphQLString },
    commission: { type: GraphQLFloat },
    logoPath: { type: GraphQLString },
  }),
});

const PhoneType = new GraphQLObjectType({
  name: "phone",
  fields: () => ({
    number: { type: GraphQLID },
    payment: {
      type: new GraphQLList(PaymentType),
      resolve(parent, args) {
        return paymentData.filter((pay) => pay.number == parent.number);
      },
    },
    operator: {
      type: MOperatorType,
      resolve(parent, args) {
        return operatorData.find((operMob) => operMob.id == parent.operator);
      },
    },
    firstPayDate: { type: GraphQLString },
  }),
});

const PaymentType = new GraphQLObjectType({
  name: "payment",
  fields: () => ({
    id: { type: GraphQLID },
    number: {
      type: PhoneType,
      resolve(parent, args) {
        return phoneData.find((phone) => (phone.number = parent.number));
      },
    },
    time: { type: GraphQLString },
    amounthPay: { type: GraphQLString },
    status: { type: GraphQLBoolean },
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
    operator: {
      type: new GraphQLList(MOperatorType),
      resolve(parent, args) {
        return operatorData;
      },
    },

    phone: {
      type: PhoneType,
      args: { number: { type: GraphQLID } },
      resolve(parent, args) {
        return phoneData.find((phone) => phone.number == args.number);
      },
    },

    phone: {
      type: new GraphQLList(PhoneType),
      resolve(parent, args) {
        return phoneData;
      },
    },

    payment: {
      type: PaymentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return paymentData.find((pay) => pay.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
