

export function PointerMove({ mousePosition }: { mousePosition: { x: number, y: number } }) {
  return (
    <div
      className="fixed inset-0 z-30 transition duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, #1d4ed826, transparent 80%)`,
      }}
    ></div>
  );
}
