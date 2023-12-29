import { render } from "@testing-library/react-native"

import { QuotationList } from "."

const quotationsMock = [
  { date: "2023-12-27T15:29:00+00:00", price: 42908.6499 },
  { date: "2023-12-28T18:46:00+00:00", price: 42540.2458 },
  { date: "2023-12-29T01:52:00+00:00", price: 42283.0887 },
]

describe("<QuotationList />", () => {
  it("should render the bitcoin image for each quotation in the list", () => {
    const { getAllByTestId } = render(<QuotationList quotations={quotationsMock} />)

    expect(getAllByTestId(/bitcoinImage/i)).toHaveLength(3)
  })

  it("should render all list quotation prices and dates", () => {
    const { getAllByText } = render(<QuotationList quotations={quotationsMock} />)

    expect(getAllByText(/\$/i)).toHaveLength(3)
    expect(getAllByText(/\//i)).toHaveLength(3)
  })
})
