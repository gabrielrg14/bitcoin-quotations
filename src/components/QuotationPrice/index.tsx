import moment from "moment"

import { Quotation } from "../../@types"

import * as S from "./styles"

type QuotationPrice = {
  quotation: Quotation
}

export const QuotationPrice = ({ quotation }: QuotationPrice) => {
  return (
    <S.Wrapper>
      <S.BitcoinImage testID="bitcoinImage" source={require("../../../assets/bitcoin.png")} />
      <S.Quotation>
        <S.Price>
          {quotation.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </S.Price>
        <S.Date>{moment(quotation.date).format("MM/DD/YYYY HH:mm")} (UTC)</S.Date>
      </S.Quotation>
    </S.Wrapper>
  )
}
