import { Quotation } from "../../@types"

import * as S from "./styles"

import QuotationItem from "./QuotationItem"

type QuotationListProps = {
  quotations: Quotation[]
}

export const QuotationList = ({ quotations }: QuotationListProps) => {
  return (
    <S.List
      showsVerticalScrollIndicator={false}
      data={quotations}
      renderItem={({ item, index }) => <QuotationItem key={index} quotation={item as Quotation} />}
    />
  )
}
