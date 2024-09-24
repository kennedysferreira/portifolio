interface StickyTitleProps {
  children: string;
}

export function StickyTitle({ children }: StickyTitleProps) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 ma-w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden ">
      <h1 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {children}
      </h1>
    </div>
  );
}
