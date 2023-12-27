import { Api } from "../../../providers"
import { jan2021Quotations, currentQuotation } from "./mocks"
import { BitcoinService } from ".."

describe("BitcoinService", () => {
  describe("getQuotationsByPeriod", () => {
    beforeAll(() => {
      jest.spyOn(Api, "get").mockResolvedValue({ data: jan2021Quotations })
    })

    it("should return the quotations with price and date in the period passed", async () => {
      const quotations = await BitcoinService.getQuotationsByPeriod({ start: "2021-01-01", end: "2021-01-31" })
      expect(quotations[0]).toHaveProperty("price")
      expect(quotations[0]).toHaveProperty("date")
    })

    it("should return the correct number of quotations in the period passed", async () => {
      const quotations = await BitcoinService.getQuotationsByPeriod({ start: "2021-01-01", end: "2021-01-31" })
      expect(quotations.length).toEqual(31)
    })
  })

  describe("getCurrentQuotation", () => {
    it("should return the price and date of the current bitcoin quotation", async () => {
      jest.spyOn(Api, "get").mockResolvedValueOnce({ data: currentQuotation })
      const current = await BitcoinService.getCurrentQuotation()
      expect(current).toHaveProperty("price")
      expect(current).toHaveProperty("date")
    })
  })
})
