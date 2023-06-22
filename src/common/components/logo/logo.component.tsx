import { StyledLogo } from './logo.styles';
import LogoImage from './../../../assets/icons/logo.svg';

export default function Logo() {
  return (
    <StyledLogo to={'/'}>
      <img src={LogoImage} alt="Logo" />
      <span>HappyBooks</span>
    </StyledLogo>
  );
}
