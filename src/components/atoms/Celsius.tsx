import styled from 'styled-components';

interface CelsiusProps {
  value: number;
  size: number;
  [x: string]: any;
}

const Number = styled.p<Partial<CelsiusProps>>`
  font-size: ${({ size }) => size && `${size / 10}rem`};
`;

const Celsius: React.FC<CelsiusProps> = ({ value, size, ...props }) => (
  <Number size={size} {...props}>
    {parseInt(value.toFixed())}
    <span>&#8451;</span>
  </Number>
);

export default Celsius;
