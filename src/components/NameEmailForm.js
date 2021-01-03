import styled from 'styled-components'

import Input from './Input'
import Button from './Button'

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 80px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  > input, button {
    margin: 4px;
  }
`

function NameEmailForm ({ buttonText }) {
  return (
    <Form>
      <Input
        placeholder="Seu nome"
        required
      />
      <Input
        type="email"
        placeholder="Seu email"
        required
      />
      <Input
        placeholder="Seu CPF"
        required
      />
      <Input
        type="date"
        placeholder="Data de nascimento"
        required
      />
      <Button>{ buttonText }</Button>
    </Form>
  )
}

NameEmailForm.defaultProps = {
  buttonText: "Criar"
}

export default NameEmailForm