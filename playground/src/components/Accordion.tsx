import { ReactNode, useState } from "react";
import "./Accordion.css";

interface PanelProps {
  children?: ReactNode;
  isActive: boolean;
}

function Panel({ children, isActive = false }: PanelProps) {
  return (
    <div
      className={
        isActive ? "accordion-panel active-accordion" : "accordion-panel"
      }
    >
      {children}
    </div>
  );
}

interface AccordionProps {
  accordionDescription: string;
  children?: ReactNode;
}

function Accordion({ accordionDescription, children }: AccordionProps) {
  const [isAccordionActive, setAccordionActive] = useState(false);
  return (
    <>
      <div className="accordion">
        <div
          className={
            isAccordionActive
              ? "accordion-icon arrow-down"
              : "accordion-icon arrow-right"
          }
        ></div>
        <h4
          onClick={() => {
            isAccordionActive
              ? setAccordionActive(false)
              : setAccordionActive(true);
          }}
        >
          {accordionDescription}
        </h4>
        <Panel isActive={isAccordionActive}>{children}</Panel>
      </div>
    </>
  );
}

export default Accordion;
