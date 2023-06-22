import StyledTextInput from './text-input.styles';

export interface TextInputProps {
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
  name: string;
}

export default function TextInput({
  placeholder,
  handleChange,
  value,
  onClick,
  name,
}: TextInputProps) {
  return (
    <StyledTextInput
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      onClick={onClick}
      name={name}
    />
  );
}
