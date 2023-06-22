import StyledButton from './button.styles';

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ text, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}
