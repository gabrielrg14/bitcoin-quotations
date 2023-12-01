import moment from "moment"

import { Quotation } from "../../../@types"

import * as S from "./styles"

type QuotationItemProps = {
  quotation: Quotation
}

const QuotationItem = ({ quotation }: QuotationItemProps) => {
  return (
    <S.Wrapper>
      <S.PriceView>
        <S.BitcoinImage source={require("../../../../assets/bitcoin.png")} />
        <S.PriceText>
          {quotation.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </S.PriceText>
      </S.PriceView>
      <S.DateText>{moment(quotation.date).format("MM/DD/YYYY")}</S.DateText>
    </S.Wrapper>
  )
}

export default QuotationItem
