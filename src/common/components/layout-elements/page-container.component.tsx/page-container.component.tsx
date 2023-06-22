import { StyledPageContainer } from './page-container.styles';

interface PageContainerProps {
  children?: JSX.Element;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}
