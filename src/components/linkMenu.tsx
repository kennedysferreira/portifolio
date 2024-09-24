

interface LinkMenuProps {
  children: React.ReactNode;
  href: string;
}

export function LinkMenu({ children, href }: LinkMenuProps) {
  return (
    <a
      className="group flex items-center gap-2 py-3 cursor-pointer"
      href={href}
    >
      <span className=" h-[2px] w-8 bg-slate-600 transition-all duration-500 group-hover:w-[70px] group-hover:bg-indigo-500 group-focus-visible:w-16 group-focus-visible:bg-teal-400 "></span>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-500 group-focus-visible:text-teal-400">
        {children}
      </span>
      
    </a>
  );
}
