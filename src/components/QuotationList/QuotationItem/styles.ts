import styled from "styled-components/native"

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #232323;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`

export const PriceView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const BitcoinImage = styled.Image`
  width: 24px;
  height: 24px;
`

export const PriceText = styled.Text`
  color: #fff;
  font-size: 18px;
`

export const DateText = styled.Text`
  color: #fff;
  font-size: 16px;
`
