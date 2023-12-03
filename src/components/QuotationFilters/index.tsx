import * as S from "./styles"

import FilterButton from "./FilterButton"

type QuotationFiltersProps = {
  selectedFilter: number
  filters: number[]
  setFilter: (filter: number) => void
}

export const QuotationFilters = ({ selectedFilter, filters, setFilter }: QuotationFiltersProps) => {
  return (
    <S.Wrapper>
      {filters.map((filter, index) => (
        <FilterButton
          key={index}
          selected={selectedFilter === filter}
          filter={filter}
          onPress={() => setFilter(filter)}
        />
      ))}
    </S.Wrapper>
  )
}
