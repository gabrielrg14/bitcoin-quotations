import { Api } from "../../providers"
import { Quotation } from "../../@types"

type PeriodProps = {
  start: string
  end: string
}

const getQuotationsByPeriod = async ({ start, end }: PeriodProps) => {
  const { data } = await Api.get(`/historical/close.json?start=${start}&end=${end}`)
  const quotations = data?.bpi
  const quotationArray: Quotation[] = []

  Object.keys(quotations).map((key) =>
    quotationArray.push({
      price: quotations[key],
      date: key,
    })
  )

  return quotationArray
}

const getCurrentQuotation = async () => {
  const { data } = await Api.get("/currentprice.json")
  return {
    price: data?.bpi.USD.rate_float,
    date: data?.time.updatedISO
  }
}

export const BitcoinService = {
  getQuotationsByPeriod,
  getCurrentQuotation,
}
