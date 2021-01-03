import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 42vh;
  color: ${({ theme }) => theme.colors.light};
  padding-left: 60px;
  line-height: 5px;
`

const FormDiv = styled.div`
  display: flex;
  max-height: 410px;
  align-items: center;
  justify-content: right;
  padding-top: 10px;
`

export default function HomePageHeader () {
  return (
    <ImageContainer>
      <Container>
        <Logo/>
        <h2> O MAIOR SALTO DA MINHA CARREIRA!</h2>
      </Container>
      <FormDiv>
         <NameEmailForm />
      </FormDiv>
    </ImageContainer>
  )
}