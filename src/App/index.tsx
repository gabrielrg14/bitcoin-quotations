import { useState, useEffect } from "react"
import { StatusBar } from "react-native"

import { Quotation } from "../@types"
import { CryptoService } from "../services/CryptoService"

import * as S from "./styles"

import { QuotationPrice, QuotationGraph, QuotationFilters, QuotationList } from "../components"

const App = () => {
  const yearsFilter = [2022, 2021, 2020, 2019, 2018]
  const [selectedYear, setSelectedYear] = useState(yearsFilter[0])
  const [currentQuotation, setCurrentQuotation] = useState<Quotation>({ price: null, date: null })
  const [quotations, setQuotations] = useState<Quotation[]>([])

  const getCurrentQuotation = async () => {
    await CryptoService.getCurrentQuotation()
      .then(({ data }) => {
        setCurrentQuotation({
          price: data?.bpi["USD"].rate_float,
          date: data?.time.updatedISO,
        })
      })
      .catch((err) => console.log(err))
  }

  const getQuotationsByYear = async (year: number) => {
    await CryptoService.getQuotationsByPeriod({
      start: `${year}-01-01`,
      end: `${year}-12-31`,
    })
      .then(({ data }) => {
        const quotations = data?.bpi
        const quotationArray: Quotation[] = []

        Object.keys(quotations).map((key) =>
          quotationArray.push({
            price: quotations[key],
            date: key,
          })
        )

        setQuotations(quotationArray)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getCurrentQuotation()
    getQuotationsByYear(selectedYear)
  }, [selectedYear])

  return (
    <S.Wrapper>
      <StatusBar backgroundColor="#18a330" barStyle="light-content" />
      <QuotationPrice quotation={currentQuotation} />
      <QuotationGraph />
      <QuotationFilters filters={yearsFilter} setFilter={setSelectedYear} />
      <QuotationList quotations={quotations} />
    </S.Wrapper>
  )
}

export default App
