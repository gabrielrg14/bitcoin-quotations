import { render } from "@testing-library/react-native"

import { QuotationGraph } from "."

const quotationsMock = [42908.6499, 42540.2458, 42283.0887]

describe("<QuotationGraph />", () => {
  it("should render the graph view and be visible", () => {
    const { getByTestId } = render(<QuotationGraph year={2022} quotations={quotationsMock} />)

    expect(getByTestId(/graphView/i)).toBeOnTheScreen()
    expect(getByTestId(/graphView/i)).toBeVisible()
  })

  it("should render the year in the graph", () => {
    const { getByText } = render(<QuotationGraph year={2022} quotations={quotationsMock} />)

    expect(getByText(/2022/i)).toBeOnTheScreen()
  })
})
