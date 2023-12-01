import styled from "styled-components/native"

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`

export const BitcoinImage = styled.Image`
  width: 64px;
  height: 64px;
`

export const Quotation = styled.View`
  justify-content: center;
  align-items: center;
`

export const Price = styled.Text`
  color: #18a330;
  font-size: 32px;
  font-weight: bold;
`

export const Date = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
