import * as S from "./styles"

import FilterButton from "./FilterButton"

type QuotationFiltersProps = {
  setFilter: (year: number) => void
}

export const QuotationFilters = ({ setFilter }: QuotationFiltersProps) => {
  const yearsFilter = [2022, 2021, 2020, 2019, 2018]
  return (
    <S.Wrapper>
      {yearsFilter.map((year, index) => (
        <FilterButton key={index} year={year} onPress={() => setFilter(year)} />
      ))}
    </S.Wrapper>
  )
}
