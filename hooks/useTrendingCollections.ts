import { useQuery, gql } from "@apollo/client"

const TRENDING_COLLECTIONS_QUERY = gql`
  query TrendingCollections {
    trendingCollections(orderBy: SALES, orderDirection: DESC) {
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
              ceiling
              floor
              volume
            }
            symbol
          }
        }
      }
    }
  }
`

const useTrendingCollections = () => {
  const { data, error } = useQuery(TRENDING_COLLECTIONS_QUERY)
  return { data, error }
}

export default useTrendingCollections
