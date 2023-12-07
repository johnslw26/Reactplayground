interface ButtonProps {
  children: string;
  backgroundColor?: string;
  onClick: () => void;
}
function SimpleButton({ children, onClick, backgroundColor }: ButtonProps) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <button className="button" style={buttonStyle} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default SimpleButton;
