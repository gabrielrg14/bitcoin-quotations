import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

type FilterButtonProps = {
  filter: number
}

const FilterButton = ({ filter, ...props }: FilterButtonProps & TouchableOpacityProps) => {
  return (
    <S.Button {...props}>
      <S.TextButton>{filter}</S.TextButton>
    </S.Button>
  )
}

export default FilterButton
