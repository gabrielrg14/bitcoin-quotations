import * as S from "./styles"

import FilterButton from "./FilterButton"

type QuotationFiltersProps = {
  filters: number[]
  setFilter: (filter: number) => void
}

export const QuotationFilters = ({ filters, setFilter }: QuotationFiltersProps) => {
  return (
    <S.Wrapper>
      {filters.map((filter, index) => (
        <FilterButton key={index} filter={filter} onPress={() => setFilter(filter)} />
      ))}
    </S.Wrapper>
  )
}
