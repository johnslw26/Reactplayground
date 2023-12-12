import { ReactNode, useState } from "react";
import "./ExpandableText.css";

interface ExpandableText {
  children: ReactNode;
}
function ExpandableText({ children }: ExpandableText) {
  const [isFullTextShown, setFullTextShown] = useState(false);
  return (
    <>
      <div className={!isFullTextShown ? "limitTextLength" : ""}>
        {children}
      </div>
      {!isFullTextShown && children ? (
        <a
          className="read-more"
          onClick={() => {
            setFullTextShown(true);
          }}
        >
          Read More
        </a>
      ) : (
        ""
      )}
    </>
  );
}

export default ExpandableText;
