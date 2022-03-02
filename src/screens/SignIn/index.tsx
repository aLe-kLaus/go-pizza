import { Input } from "../../components/Input"
import { Container } from "./styles"

export const SignIn = () => {
  return (
    <Container>
      <Input type="secondary" placeholder="Email" autoCorrect={false} autoCapitalize="none"/>
      <Input type="secondary" placeholder="Password" secureTextEntry/>
    </Container>
  )
}