interface StickyTitleProps {
  children: string;
}

export function StickyTitle({ children }: StickyTitleProps) {
  return (
    <div className="sticky top-2 rounded-md z-20 -mx-2 mb-4 ma-w-screen bg-slate-950/30 px-2 py-3 backdrop-blur md:-mx-12 md:px-12 lg:hidden ">
      <h1 className="text-xs font-semibold uppercase tracking-widest text-slate-200 lg:sr-only">
        {children}
      </h1>
    </div>
  );
}
