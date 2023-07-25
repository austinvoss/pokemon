import React, { useState } from "react";
import OpenedPack from "./components/OpenedPack";
import UnopenedPack from "./components/UnopenedPack";
import Card from "./components/Card";

export default function App() {
  const [open, setOpen] = useState(false);

  const handlePackClick = () => {
    setOpen(true);
  };

  if (open) {
    return (
      <div>
        <OpenedPack />
      </div>
    );
  } else {
    return (
      <div onClick={handlePackClick} className="cursor-pointer">
        <UnopenedPack />
      </div>
    );
  }
}
