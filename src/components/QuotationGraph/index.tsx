import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

import * as S from "./styles"

type QuotationGraphProps = {
  year: number
  quotations: number[]
}

export const QuotationGraph = ({ year, quotations }: QuotationGraphProps) => {
  return (
    <S.Wrapper testID="graphView">
      <S.Year>{year}</S.Year>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: quotations,
            },
          ],
        }}
        width={(Dimensions.get("window").width * 90) / 100}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLines={false}
        withVerticalLabels={false}
        withHorizontalLines={false}
        transparent={true}
        chartConfig={{
          backgroundGradientFrom: "#232323",
          backgroundGradientTo: "#3F3F3F",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            fontWeight: "bold",
            fontSize: 12,
          },
          propsForDots: {
            r: "1",
            strokeWidth: "1",
            stroke: "#18a330",
          },
        }}
        segments={5}
        bezier
      />
    </S.Wrapper>
  )
}
