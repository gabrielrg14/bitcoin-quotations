import styled from "styled-components/native"

type ButtonProps = {
  selected: boolean
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => (props.selected ? "#FFF" : "#18a330")};
  width: 48px;
  height: 28px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text<ButtonProps>`
  color: ${(props) => (props.selected ? "#18a330" : "#FFF")};
  font-size: 16px;
  font-weight: bold;
`
