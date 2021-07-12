import styled from 'styled-components';

interface CelsiusProps {
  value: number;
  size: number;
}

const Number = styled.p<Partial<CelsiusProps>>`
  font-size: ${({ size }) => size && `${size}px`};
`;

const Celsius: React.FC<CelsiusProps> = ({ value, size }) => (
  <Number size={size}>
    {parseInt(value.toFixed())}
    <span>&#8451;</span>
  </Number>
);

export default Celsius;
