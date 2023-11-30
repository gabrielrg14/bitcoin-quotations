import { useState, useCallback, useEffect } from "react"
import { StatusBar } from "react-native"
import moment from "moment"

import { Quotation } from "../@types"
import { CryptoService } from "../services/CryptoService"

import * as S from "./styles"

import { QuotationPrice, QuotationGraph, QuotationFilters, QuotationList } from "../components"

const App = () => {
  const [selectedYear, setSelectedYear] = useState(2022)
  const [quotations, setQuotations] = useState<Quotation[]>([])

  const getQuotationByYear = useCallback(
    async (year: number) => {
      await CryptoService.getQuotationsByPeriod({
        start: `${year}-01-01`,
        end: `${year}-12-31`,
      })
        .then((resp) => {
          const quotations = resp.data?.bpi
          const quotationArray: Quotation[] = []

          Object.keys(quotations).map((key) =>
            quotationArray.push({
              price: quotations[key],
              date: moment(key).format("DD/MM/YYYY"),
            })
          )

          setQuotations(quotationArray)
        })
        .catch((err) => console.log(err))
    },
    [selectedYear]
  )

  useEffect(() => {
    getQuotationByYear(selectedYear)
  }, [getQuotationByYear])

  return (
    <S.Wrapper>
      <StatusBar backgroundColor="#18a330" barStyle="light-content" />
      <QuotationPrice />
      <QuotationGraph />
      <QuotationFilters setFilter={(year: number) => setSelectedYear(year)} />
      <QuotationList quotations={quotations} />
    </S.Wrapper>
  )
}

export default App
