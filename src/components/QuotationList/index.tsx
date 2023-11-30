import { Quotation } from "../../@types"

import * as S from "./styles"

import QuotationItem from "./QuotationItem"

type QuotationListProps = {
  quotations: Quotation[]
}

export const QuotationList = ({ quotations }: QuotationListProps) => {
  return (
    <S.List
      data={quotations}
      renderItem={({ item }) => <QuotationItem quotation={item as Quotation} />}
    />
  )
}
