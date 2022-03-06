import { KeyboardAvoidingView, Platform } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Brand, Container, Content, ForgotPassButton, ForgotPassLabel, Title } from "./styles"
import brandImg from '../../assets/brand.png'

export const SignIn = () => {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={brandImg}/>
          <Title>Login</Title>
          <Input type="secondary" placeholder="Email" autoCorrect={false} autoCapitalize="none"/>
          <Input type="secondary" placeholder="Password" secureTextEntry/>
          <ForgotPassButton>
            <ForgotPassLabel>
              Forgot my password
            </ForgotPassLabel>
          </ForgotPassButton>
          <Button title="Sign In" type="secondary"/>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}