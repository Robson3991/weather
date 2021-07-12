import CityInput from 'components/atoms/CityInput';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 40px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color-black-rgb), 0.1);
`;

const Header = () => (
  <Wrapper>
    <CityInput />
  </Wrapper>
);

export default Header;
