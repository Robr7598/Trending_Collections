import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: "https://graphql.icy.tools/graphql",
})

const getHeaders = setContext((_, { headers }) => {
  // use token from .env file to make request/query
  const icyToken = process.env.NEXT_PUBLIC_ICY_TOKEN

  console.log(icyToken)

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: icyToken ? `Bearer ${icyToken}` : "",
    },
  }
})

export default new ApolloClient({
  link: getHeaders.concat(httpLink),
  cache: new InMemoryCache(),
})
