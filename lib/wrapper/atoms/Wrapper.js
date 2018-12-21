import styled from 'styled-components'

const StyledDiv = styled('div')`
width: ${props => props.wrapperSize};
font-size: ${props => props.wrapperSize};
`;

const Wrapper = (props) => (
 <StyledDiv>{props.children}</StyledDiv>
)

  export {Wrapper}