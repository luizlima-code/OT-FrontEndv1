import styled from 'styled-components'

const StyledButton = styled.button`
  width: 360px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px 25px;
  font-size: 22px;
  display: block;
  border-radius: 12px;
  background-color: black;
  outline: none;

  &:hover {
    border-radius: 18px;
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`

export default function Button (props) {
  return <StyledButton {...props}/>
} 