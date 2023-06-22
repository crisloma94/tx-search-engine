import { StyledElementContainer } from './element-container.styles';

interface ElementContainerProps {
  children?: JSX.Element;
}

export default function ElementContainer({ children }: ElementContainerProps) {
  return <StyledElementContainer>{children}</StyledElementContainer>;
}
