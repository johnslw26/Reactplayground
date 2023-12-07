import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: AlertProps) {
  return (
    <>
      <div className="alert">
        {children}
        <button className="alert-close" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
}

export default Alert;
