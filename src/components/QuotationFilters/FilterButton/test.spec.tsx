import { render } from "@testing-library/react-native"

import FilterButton from "."

describe("<FilterButton />", () => {
  describe("the filter button is selected", () => {
    it("should render the button with correct styles", () => {
      const { getByRole, getByText } = render(<FilterButton selected={true} filter={2022} />)

      expect(getByRole("button")).toHaveStyle({ backgroundColor: "#FFF" })
      expect(getByText(/2022/i)).toHaveStyle({ color: "#18a330" })
    })
  })

  describe("the filter button is NOT selected", () => {
    it("should render the button with correct styles", () => {
      const { getByRole, getByText } = render(<FilterButton selected={false} filter={2021} />)

      expect(getByRole("button")).toHaveStyle({ backgroundColor: "#18a330" })
      expect(getByText(/2021/i)).toHaveStyle({ color: "#FFF" })
    })
  })
})
