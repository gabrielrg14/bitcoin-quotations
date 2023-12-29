import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

type FilterButtonProps = {
  selected: boolean
  filter: number
}

const FilterButton = ({
  selected,
  filter,
  ...props
}: FilterButtonProps & TouchableOpacityProps) => {
  return (
    <S.Button accessibilityRole="button" selected={selected} {...props}>
      <S.TextButton selected={selected}>{filter}</S.TextButton>
    </S.Button>
  )
}

export default FilterButton
