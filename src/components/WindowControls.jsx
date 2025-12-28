import useWindowStore from "#store/window";
import { X } from "lucide-react";

export default function WindowControls({ target }) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close group" onClick={() => closeWindow(target)}>
        <X
          color="black"
          size={10}
          className="opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
}
