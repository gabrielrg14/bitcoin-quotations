import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

type FilterButtonProps = {
  year: number
}

const FilterButton = ({ year, ...props }: FilterButtonProps & TouchableOpacityProps) => {
  return (
    <S.Button {...props}>
      <S.TextButton>{year}</S.TextButton>
    </S.Button>
  )
}

export default FilterButton
