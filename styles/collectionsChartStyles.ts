//Using a ts file for the chart styles instead of css file as some typescript is involved to format labels

export const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: "Sales",
  legendPosition: "middle" as const,
  legendOffset: 32,
}

export const axisLeft = {
  // format collection name: show truncated name if length is greater than 20 characters
  format: (v: string) => {
    return v.length > 20 ? v.substring(0, 20) + "..." : v
  },
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
}

export const theme = {
  background: "#222222",
  axis: {
    fontSize: "18px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#555555",
    },
  },
}
