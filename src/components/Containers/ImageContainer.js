import styled from 'styled-components'

const Background = styled.div`
  background-image: url('/background.png');
  width: 100%;
  height: 105vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default function ImageContainer ({ children }) {
  return <Background>{ children }</Background>
}