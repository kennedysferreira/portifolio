import { Toaster } from "sonner";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { PointerMove } from "./components/pointerMove";
import { useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 334, y: 666.6 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-slate-950 leading-relaxed text-slate-400 antialiased "
    >
      <Toaster invert richColors />
      <PointerMove mousePosition={mousePosition} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
