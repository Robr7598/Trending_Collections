import * as React from "react"
import { useEffect, useState } from "react"
import CollectionsChart from "./CollectionsChart"
import type { ChartDataProps } from "./CollectionsChart"
import useTrendingCollections from "../hooks/useTrendingCollections"

const TrendingCollections = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [chartData, setChartData] = useState<ChartDataProps>([])

  const { data, error } = useTrendingCollections()

  useEffect(() => {
    if (data != null && data !== undefined) {
      console.info(data)
      setLoading(true)
      const chartDataArray: ChartDataProps = data.trendingCollections.edges.map(
        // Always better to do validation of API response than type checking while using the response
        ({ node }: any) => {
          return { name: node.name, sales: node.stats.totalSales }
        }
      )
      setChartData(chartDataArray)
      setLoading(false)
    }
  }, [data, setChartData])

  if (isLoading) {
    return <div className="items-center text-white mt-40">Loading</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {chartData.length > 0 && <CollectionsChart collectionsData={chartData} />}
    </div>
  )
}

export default TrendingCollections
