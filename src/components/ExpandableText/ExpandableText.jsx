import { useState } from "react";
import "./expandableText.css";

export default function ExpandableText({ text, maxLines = 5 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`expandable-text ${expanded ? "expanded" : ""}`}>
      <div 
        className="expandable-text-content"
        style={{ WebkitLineClamp: expanded ? "unset" : maxLines }}
      >
        {text}
      </div>

      <button 
        className="expand-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Leer menos" : "Leer más"}
      </button>
    </div>
  );
}
