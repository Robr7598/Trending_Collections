import * as React from "react"
import { Bar } from "@nivo/bar"
import { axisLeft, axisBottom, theme } from "../styles/collectionsChartStyles"

type ChartDatumProps = {
  name: string
  sales: number
}

export type ChartDataProps = Array<ChartDatumProps>

const CollectionsChart = ({
  collectionsData,
}: {
  collectionsData: ChartDataProps
}) => {
  return (
    <div>
      <Bar
        data={collectionsData}
        keys={["sales"]}
        indexBy="name"
        layout="horizontal"
        width={1000}
        height={800}
        margin={{ top: 30, right: 120, bottom: 60, left: 180 }}
        padding={0.1}
        labelTextColor="inherit:darker(2.4)"
        labelSkipWidth={12}
        labelSkipHeight={12}
        enableGridX={false}
        axisBottom={axisBottom}
        axisLeft={axisLeft}
        theme={theme}
      />
    </div>
  )
}

export default CollectionsChart
