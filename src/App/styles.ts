import styled from "styled-components/native"
import { Platform, StatusBar } from "react-native"

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #161817;
  align-items: center;
  padding-top: ${Platform.OS === "android" ? `${StatusBar.currentHeight}px` : 0};
`
