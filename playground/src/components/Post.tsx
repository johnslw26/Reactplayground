import { ReactNode } from "react";
import "./Post.css";
import LikeButton from "./LikeButton";

interface PostProps {
  heading: string;
  children: ReactNode;
  isLikeButtonVisible?: boolean;
  onLikeButtonClick: () => void;
}

function Post({
  heading,
  children,
  isLikeButtonVisible = false,
  onLikeButtonClick,
}: PostProps) {
  return (
    <div className="post">
      <h3>{heading}</h3>
      <p>{children}</p>
      <div className="post-status-Bar">
        <ul>
          {isLikeButtonVisible && (
            <li>
              <LikeButton onLikeButtonClick={onLikeButtonClick} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Post;
