import { render } from "@testing-library/react-native"

import { QuotationPrice } from "."

const quotationMock = { date: "2023-12-27T15:29:00+00:00", price: 42908.6499 }

describe("<QuotationPrice />", () => {
  it("should render the bitcoin image", () => {
    const { getByTestId } = render(<QuotationPrice quotation={quotationMock} />)

    expect(getByTestId(/bitcoinImage/i)).toBeOnTheScreen()
  })

  it("should render the quotation price formatted in USD", () => {
    const { getByText } = render(<QuotationPrice quotation={quotationMock} />)

    expect(getByText("$42,908.65")).toBeOnTheScreen()
  })

  it("should render the quotation date formatted correctly", () => {
    const { getByText } = render(<QuotationPrice quotation={quotationMock} />)

    expect(getByText("12/27/2023 15:29 (UTC)")).toBeOnTheScreen()
  })
})
