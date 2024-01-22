import { Api } from "../../../providers"
import { mocks } from "./mocks"

import { BitcoinService } from "../"

describe("BitcoinService", () => {
  describe("getQuotationsByPeriod", () => {
    beforeAll(() => {
      jest.spyOn(Api, "get").mockResolvedValue({ data: mocks.jan2021Quotations })
    })

    it("should return the quotations with price and date in the period passed", async () => {
      const quotations = await BitcoinService.getQuotationsByPeriod({
        start: "2021-01-01",
        end: "2021-01-31",
      })

      expect(quotations[0]).toHaveProperty("price", 29391.775)
      expect(quotations[0]).toHaveProperty("date", "2021-01-01")
    })

    it("should return the correct number of quotations in the period passed", async () => {
      const quotations = await BitcoinService.getQuotationsByPeriod({
        start: "2021-01-01",
        end: "2021-01-31",
      })

      expect(quotations).toHaveLength(31)
    })
  })

  describe("getCurrentQuotation", () => {
    it("should return the price and date of the current bitcoin quotation", async () => {
      jest.spyOn(Api, "get").mockResolvedValueOnce({ data: mocks.currentQuotation })

      const current = await BitcoinService.getCurrentQuotation()

      expect(current).toHaveProperty("price", 42908.6499)
      expect(current).toHaveProperty("date", "2023-12-27T15:29:00+00:00")
    })
  })
})
