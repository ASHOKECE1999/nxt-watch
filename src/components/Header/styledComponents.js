import styled from 'styled-components'

const CusDiv = styled.div`
  background-color: ${props => (props.colors === true ? '#231f20' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export default CusDiv
