import { useState } from "react";
import "./LikeButton.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  onLikeButtonClick: () => void;
}

function LikeButton({ onLikeButtonClick }: LikeButtonProps) {
  const [status, setStatus] = useState(false);

  if (status)
    return (
      <FaHeart
        className="heart-clicked"
        onClick={() => {
          setStatus(false);
          onLikeButtonClick();
        }}
      />
    );
  return (
    <FaRegHeart
      className="heart-default"
      onClick={() => {
        setStatus(true);
        onLikeButtonClick();
      }}
    />
  );
}

export default LikeButton;
