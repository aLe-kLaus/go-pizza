import { TextInputProps } from "react-native";

import { Container, InputType } from "./styles";

type InputProps = TextInputProps & {
  type?: InputType
}

export const Input = ({type = 'primary', ...props}: InputProps) => {
  return <Container type={type} {...props} />
}