import { render, fireEvent } from "@testing-library/react-native"

import { QuotationFilters } from "."

describe("<QuotationFilters />", () => {
  it("should render all filters on screen", () => {
    const setFilterMock = jest.fn()

    const { getByText } = render(
      <QuotationFilters
        selectedFilter={2022}
        filters={[2022, 2021, 2020, 2019, 2018]}
        setFilter={setFilterMock}
      />
    )

    expect(getByText(/2022/i)).toBeOnTheScreen()
    expect(getByText(/2021/i)).toBeOnTheScreen()
    expect(getByText(/2020/i)).toBeOnTheScreen()
    expect(getByText(/2019/i)).toBeOnTheScreen()
    expect(getByText(/2018/i)).toBeOnTheScreen()
  })

  it("should call setFilter when the filter is pressed passing it as parameter", () => {
    const setFilterMock = jest.fn()

    const { getByText } = render(
      <QuotationFilters
        selectedFilter={2022}
        filters={[2022, 2021, 2020, 2019, 2018]}
        setFilter={setFilterMock}
      />
    )

    fireEvent.press(getByText(/2021/i))

    expect(setFilterMock).toHaveBeenCalledWith(2021)
  })
})
