import "./button.css";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined" | "transparent";
  color?: "primary" | "secondary";
  handleClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const {
    variant = "transparent",
    color = "primary",
    handleClick,
    ...restProps
  } = props;

  return (
    <button
      className={`base ${variant} ${color}`}
      {...restProps}
      onClick={handleClick}
    />
  );
};
