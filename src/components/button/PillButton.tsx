import "./pill-button.css";

interface IButtonStyle {
  backgroundColor: string;
}

interface IPillButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  buttonStyle?: IButtonStyle;
}

export const PillButton = (props: IPillButtonProps) => {
  const { children, handleClick, buttonStyle } = props;
  return (
    <button className="pill-button" style={buttonStyle} onClick={handleClick}>
      {children}
    </button>
  );
};
