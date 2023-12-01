import { Api } from "../providers"

type PeriodProps = {
  start: string
  end: string
}

const getQuotationsByPeriod = ({ start, end }: PeriodProps) =>
  Api.get(`/historical/close.json?start=${start}&end=${end}`)

const getCurrentQuotation = () => Api.get("/currentprice.json")

export const CryptoService = {
  getQuotationsByPeriod,
  getCurrentQuotation,
}
