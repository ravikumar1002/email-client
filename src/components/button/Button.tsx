import "./button.css";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  handleClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { variant = "outlined", color = "primary", ...restProps } = props;

  return <button className={`base ${variant} ${color}`} {...restProps} />;
};
