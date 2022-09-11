import type { AppProps } from "next/app"
import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "./api/apolloClient"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
