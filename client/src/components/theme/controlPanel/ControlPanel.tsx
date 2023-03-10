import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import ComponentControls from "./ComponentControls";

export default function ControlPanel() {
  const { openComponents } = useContext(ThemeContext);
  const components = Object.keys(openComponents);

  return (
    <div className="w-20rem flex-start-start flex-column">
      <div>ControlPanel</div>
      <div className="padding-md">
        {components.map((componentId) => {
          return (
            <div className="border h-10rem w-10rem" key={componentId}>
              <ComponentControls {...openComponents[componentId]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
