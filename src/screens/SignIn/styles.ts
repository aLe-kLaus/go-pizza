import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.COLORS.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5},
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.TITLE};
`

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPassButton = styled.TouchableOpacity`
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const ForgotPassLabel = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
  color: ${({theme}) => theme.COLORS.TITLE};
`;