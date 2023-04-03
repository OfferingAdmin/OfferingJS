const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const path = require('path');

// Sample JSON data
const jsonData = readFileSync(path.join(__dirname, 'ox.json'), 'utf-8');
const data = JSON.parse(jsonData);

// Define the GraphQL schema types
const typeDefs = gql`
  type Product {
    id: Int!
    name: String!
    description: String
    image_url: String
    price: Float!
    currency: String!
    category: [String!]!
    tags: [String!]!
  }

  type Buyout {
    price: Float!
    currency: String!
    contract_address: String!
  }

  type Offering {
    id: Int!
    user_id: Int!
    description: String
    currency: String!
    amount: Float!
    temp_address: String
  }

  type MultiCurrencyOffering {
    currency: String!
    amount: Float!
    temp_address: String
  }

  type OfferingsData {
    id: Int!
    user_id: Int!
    description: String
    currency: String!
    amount: Float
    temp_address: String
    offerings: [MultiCurrencyOffering!]
  }

  type Query {
    product: Product
    buyout: Buyout
    offerings: [OfferingsData!]!
  }
`;

// Define the resolvers for the schema types
const resolvers = {
  Query: {
    product: () => data.product,
    buyout: () => data.buyout,
    offerings: () => data.offerings,
  },
};

// Create and start the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
