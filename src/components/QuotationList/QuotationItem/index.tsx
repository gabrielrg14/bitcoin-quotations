import * as S from "./styles"

import { Quotation } from "../../../@types"

type QuotationItemProps = {
  quotation: Quotation
}

const QuotationItem = ({ quotation }: QuotationItemProps) => {
  return (
    <S.Wrapper>
      <S.PriceView>
        <S.BitcoinImage source={require("../../../../assets/bitcoin.png")} />
        <S.PriceText>{quotation.price}</S.PriceText>
      </S.PriceView>
      <S.DateText>{quotation.date}</S.DateText>
    </S.Wrapper>
  )
}

export default QuotationItem
